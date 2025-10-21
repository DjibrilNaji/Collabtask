"use server"

import { auth } from "@/lib/auth"
import { routes } from "@/web/routes"
import { put } from "@vercel/blob"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const upload = async (formData: FormData) => {
  const headersList = await headers()
  const session = await auth.api.getSession({ headers: headersList })

  if (!session) {
    redirect(routes.auth.login.path)
  }

  const file = formData.get("file") as File
  const fileName = file.name

  const blob = await put(fileName, file, {
    access: "public",
    addRandomSuffix: true
  })

  await auth.api.updateUser({ body: { image: blob.url }, headers: headersList })

  return blob.url
}
