"use client"

import { signIn } from "@/lib/auth-client"
import { Button } from "@/web/components/ui/button"
import { routes } from "@/web/routes"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { FcGoogle } from "react-icons/fc"

interface SignInOauthButtonProps {
  signUp?: boolean
}

export const SignOAuthButton = ({ signUp }: SignInOauthButtonProps) => {
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

  const action = signUp ? "Up" : "In"

  return (
    <Button effect="ringHover" onClick={handleClick} disabled={isPending}>
      <FcGoogle />
      {t("signOAuth", { action, provider: "Google" })}
    </Button>
  )
}
