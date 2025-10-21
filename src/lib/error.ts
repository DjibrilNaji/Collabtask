import { toast } from "sonner"

export const KNOWN_ERROR_KEYS = [
  "USER_NOT_FOUND",
  "FAILED_TO_CREATE_USER",
  "FAILED_TO_CREATE_SESSION",
  "FAILED_TO_UPDATE_USER",
  "FAILED_TO_GET_SESSION",
  "INVALID_PASSWORD",
  "INVALID_EMAIL",
  "INVALID_EMAIL_OR_PASSWORD",
  "SOCIAL_ACCOUNT_ALREADY_LINKED",
  "PROVIDER_NOT_FOUND",
  "INVALID_TOKEN",
  "ID_TOKEN_NOT_SUPPORTED",
  "FAILED_TO_GET_USER_INFO",
  "USER_EMAIL_NOT_FOUND",
  "EMAIL_NOT_VERIFIED",
  "PASSWORD_TOO_SHORT",
  "PASSWORD_TOO_LONG",
  "USER_ALREADY_EXISTS",
  "EMAIL_CAN_NOT_BE_UPDATED",
  "CREDENTIAL_ACCOUNT_NOT_FOUND",
  "SESSION_EXPIRED",
  "FAILED_TO_UNLINK_LAST_ACCOUNT",
  "ACCOUNT_NOT_FOUND",
  "USER_ALREADY_HAS_PASSWORD",
  "UNKNOWN_ERROR",
  "INTERNAL_SERVER_ERROR",
  "ERROR_FILE_SIZE_TOO_LARGE",
  "UPLOAD_MONTHLY_LIMIT_REACHED"
] as const

export function handleAppError(t: (key: string) => string, err: unknown) {
  let errorKey = "INTERNAL_SERVER_ERROR"

  if (err instanceof Error && typeof err.message === "string") {
    if ((KNOWN_ERROR_KEYS as readonly string[]).includes(err.message)) {
      errorKey = err.message
    }
  }

  toast.error(t(`GlobalErrors.${errorKey}`))
}
