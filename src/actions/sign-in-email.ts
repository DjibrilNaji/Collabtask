"use server"

import { APIError } from "better-auth/api"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth, ErrorCode } from "@/lib/auth"
import { SigninType } from "@/types/formTypes"

export async function signInEmailAction(values: SigninType) {
  const { email, password } = values

  try {
    const response = await auth.api.signInEmail({
      headers: await headers(),
      body: { email, password }
    })

    return { success: true, response }
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body?.code as ErrorCode

      if (errCode === "EMAIL_NOT_VERIFIED") {
        redirect("/auth/verify?error=email_not_verified")
      }

      return { error: errCode || "UNKNOWN_ERROR" }
    }

    return { error: "INTERNAL_SERVER_ERROR" }
  }
}
