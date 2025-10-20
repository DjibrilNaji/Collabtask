"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "@/lib/auth"
import { routes } from "@/web/routes"

export async function updateUserAction(data: { name: string; email: string }) {
  const headersList = await headers()
  const session = await auth.api.getSession({ headers: headersList })

  if (!session) {
    redirect(routes.auth.login.path)
  }

  await auth.api.updateUser({ body: { name: data.name }, headers: headersList })
}
