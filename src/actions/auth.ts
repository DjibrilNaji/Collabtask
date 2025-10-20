"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "@/lib/auth"
import { routes } from "@/web/routes"

export async function signOutAction() {
  const headersList = await headers()
  await auth.api.signOut({ headers: headersList })
  redirect(routes.auth.login.path)
}
