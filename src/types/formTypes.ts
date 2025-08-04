import { emailValidator, passwordValidator, stringValidator } from "@/validators"
import z from "zod"

const MAX_HASHTAGS = 5

export const signupFormSchema = z
  .object({
    name: stringValidator.min(2, {
      message: "Error.fullNameError"
    }),
    email: emailValidator,
    password: passwordValidator
  })
  .required()

export type SignupType = z.infer<typeof signupFormSchema>
