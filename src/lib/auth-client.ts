import { createAuthClient } from "better-auth/react"

const authClient = createAuthClient({
  baseURL: process.env.BASE_URL
})

export const { signIn, signUp, useSession } = authClient
