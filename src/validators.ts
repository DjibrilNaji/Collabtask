import z from "zod"

export const idValidator = z.uuid()

export const stringValidator = z.string()

export const emailValidator = z.email("Error.emailError")

export const passwordValidator = z
  .string()
  .min(10, "Error.passwordLengthError")
  .regex(
    /^(?=.*[\p{Ll}])(?=.*[\p{Lu}])(?=.*[0-9])(?=.*[^0-9\p{Lu}\p{Ll}]).*$/gu,
    "Error.passwordComplexityError"
  )
