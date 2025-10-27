import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "@/lib/auth"
import { Projects } from "@/web/components/customs/Dashboard/Projects/Projects"
import { routes } from "@/web/routes"

export default async function ProjectsPage() {
  const headersList = await headers()

  const session = await auth.api.getSession({ headers: headersList })

  if (!session) redirect(routes.auth.login.path)

  return <Projects userId={session.user.id} />
}
