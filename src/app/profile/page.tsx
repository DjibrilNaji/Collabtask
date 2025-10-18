import { Metadata } from "next"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "@/lib/auth"
import Profile from "@/web/components/customs/Profile/Profile"
import { routes } from "@/web/routes"

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your profile"
}

export default async function ProfilePage() {
  const headersList = await headers()

  const session = await auth.api.getSession({
    headers: headersList
  })

  if (!session) redirect(routes.auth.login.path)

  return <Profile userId={session.user.id} />
}
