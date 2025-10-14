"use server"

import { APIError } from "better-auth/api"

import { auth, ErrorCode } from "@/lib/auth"
import { SignupType } from "@/types/formTypes"

export async function signUpEmailAction(values: SignupType) {
  const { name, email, password } = values

  try {
    const res = await auth.api.signUpEmail({
      body: { name, email, password }
    })

    return { success: true, response: res }
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body?.code as ErrorCode

      console.error("BetterAuth signup error:", errCode)
      return { error: errCode }
    }

    console.error("Unexpected signup error:", err)
    return { error: "INTERNAL_SERVER_ERROR" }
  }
}
