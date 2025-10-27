import { NextResponse } from "next/server"

import { auth } from "@/lib/auth"
import { getUserProjectsSummary } from "@/lib/query/user-query"

export async function GET(req: Request, { params }: { params: Promise<{ userId: string }> }) {
  const session = await auth.api.getSession({ headers: req.headers })

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { userId } = await params

    const user = await getUserProjectsSummary(userId)

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
