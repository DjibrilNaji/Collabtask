import { redirect } from "next/navigation"

import { routes } from "@/web/routes"

interface PageProps {
  searchParams: Promise<{ error: string }>
}

export default async function VerifyPage({ searchParams }: PageProps) {
  const error = (await searchParams).error

  if (!error) redirect(routes.profile)

  return ""
}
