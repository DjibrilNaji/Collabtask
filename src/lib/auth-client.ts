import { createAuthClient } from "better-auth/react"

const nextPublicBaseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

if (!process.env.NEXT_PUBLIC_BASE_URL) {
  console.warn(
    "Warning: NEXT_PUBLIC_BASE_URL environment variable is not set. Using default: http://localhost:3000"
  )
}

const authClient = createAuthClient({ baseURL: nextPublicBaseURL })

export const { signIn, signUp, useSession } = authClient
