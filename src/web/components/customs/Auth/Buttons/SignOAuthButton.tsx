"use client"

import { LoaderCircleIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { FcGoogle } from "react-icons/fc"

import { signIn } from "@/lib/auth-client"
import { Button } from "@/web/components/ui/button"
import { routes } from "@/web/routes"

export const SignOAuthButton = () => {
  const [isPending, setIsPending] = useState(false)
  const t = useTranslations("Form")

  async function handleClick() {
    setIsPending(true)

    await signIn.social({
      provider: "google",
      callbackURL: routes.auth.login.callback,
      errorCallbackURL: routes.auth.login.error
    })

    setIsPending(false)
  }

  return (
    <Button effect="ringHover" onClick={handleClick} disabled={isPending}>
      {isPending && (
        <LoaderCircleIcon className="-ms-1 animate-spin" size={16} aria-hidden="true" />
      )}
      <FcGoogle />
      {t("signOAuth", { provider: "Google" })}
    </Button>
  )
}
