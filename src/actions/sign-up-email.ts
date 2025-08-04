"use server"

import { APIError } from "better-auth/api"

import { auth, ErrorCode } from "@/lib/auth"
import { SignupType } from "@/types/formTypes"

export async function signUpEmailAction(values: SignupType) {
  const { name, email, password } = values

  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password
      }
    })
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as ErrorCode) : "UNKNOWN"

      switch (errCode) {
        case "USER_ALREADY_EXISTS":
          throw new Error("USER_ALREADY_EXISTS")
        default:
          throw new Error("UNKNOWN_ERROR")
      }
    }

    return { error: "INTERNAL_SERVER_ERROR" }
  }
}
