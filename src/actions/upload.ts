"use server"

import { del, put } from "@vercel/blob"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

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
  const fileName = file.name

  if (currentImage) {
    await del(currentImage)
  }

  const blob = await put(fileName, file, {
    access: "public",
    addRandomSuffix: true
  })

  await auth.api.updateUser({ body: { image: blob.url }, headers: headersList })

  await createUserUpload(userId)

  return blob.url
}
