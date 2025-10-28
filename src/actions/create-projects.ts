"use server"

import { Prisma } from "@prisma/client"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "@/lib/auth"
import { createWorkspace } from "@/lib/query/project-query"
import { routes } from "@/web/routes"

export async function createProjectAction(data: { name: string; description: string }) {
  const headersList = await headers()
  const session = await auth.api.getSession({ headers: headersList })

  if (!session) {
    redirect(routes.auth.login.path)
  }

  try {
    await createWorkspace(data, session.user.id)
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      throw new Error("PROJECT_NAME_ALREADY_EXISTS")
    }
    throw err
  }
}
