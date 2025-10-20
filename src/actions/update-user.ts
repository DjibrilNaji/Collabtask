"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "@/lib/auth"
import { getUserById } from "@/lib/query/user/user-query"
import { routes } from "@/web/routes"

export async function updateUserAction(userId: string, data: { name: string; email: string }) {
  const headersList = await headers()
  const session = await auth.api.getSession({ headers: headersList })

  if (!session) {
    redirect(routes.auth.login.path)
  }

  const user = await getUserById(userId)
  if (!user) throw new Error("User not found")

  auth.api.updateUser({ body: { name: data.name }, headers: headersList })
}
