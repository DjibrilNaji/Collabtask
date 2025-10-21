"use server"

import { del, put } from "@vercel/blob"
import { randomUUID } from "crypto"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import path from "path"

import { auth } from "@/lib/auth"
import { createUserUpload, getUserUploadsCountByUserId } from "@/lib/query/upload-query"
import { routes } from "@/web/routes"

export const upload = async (formData: FormData, currentImage?: string) => {
  const headersList = await headers()
  const session = await auth.api.getSession({ headers: headersList })

  if (!session) {
    redirect(routes.auth.login.path)
  }

  const userId = session.user.id

  const uploadsThisMonth = await getUserUploadsCountByUserId(userId)

  if (uploadsThisMonth >= 2) {
    throw new Error("UPLOAD_MONTHLY_LIMIT_REACHED")
  }

  const file = formData.get("file") as File

  if (currentImage) {
    await del(currentImage)
  }

  const ext = path.extname(file.name).toLowerCase()
  const safeFileName = `${randomUUID()}${ext}`

  const blob = await put(safeFileName, file, {
    access: "public",
    addRandomSuffix: true
  })

  await auth.api.updateUser({ body: { image: blob.url }, headers: headersList })

  await createUserUpload(userId)

  return "blob.url"
}
