import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "@/lib/auth"
import { Dashboard } from "@/web/components/customs/Dashboard/Dashboard"
import { routes } from "@/web/routes"

export default async function Page() {
  const headersList = await headers()

  const session = await auth.api.getSession({ headers: headersList })

  if (!session) redirect(routes.auth.login.path)

  return <Dashboard userId={session.user.id} />
}
