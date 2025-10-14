"use server"

import { APIError } from "better-auth/api"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth, ErrorCode } from "@/lib/auth"
import { SigninType } from "@/types/formTypes"

export async function signInEmailAction(values: SigninType) {
  const { email, password } = values

  try {
    await auth.api.signInEmail({
      headers: await headers(),
      body: { email, password }
    })
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as ErrorCode) : "UNKNOWN"

      switch (errCode) {
        case "EMAIL_NOT_VERIFIED":
          redirect("/auth/verify?error=email_not_verified")
        default:
          throw new Error(errCode)
      }
    }

    throw new Error("INTERNAL_SERVER_ERROR")
  }
}
