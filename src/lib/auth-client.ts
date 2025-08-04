import { createAuthClient } from "better-auth/react"

const baseURL = process.env.BASE_URL || "http://localhost:3000"
if (!process.env.BASE_URL) {
  console.warn(
    "Warning: BASE_URL environment variable is not set. Using default: http://localhost:3000"
  )
}

const authClient = createAuthClient({ baseURL })

export const { signIn, signUp, useSession } = authClient
