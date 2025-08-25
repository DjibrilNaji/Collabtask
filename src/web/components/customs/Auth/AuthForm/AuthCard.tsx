import { useTranslations } from "next-intl"
import { ReactNode } from "react"

import { DividerWithText } from "@/web/components/customs/Auth/AuthForm/DividerWithText"
import { SignOAuthButton } from "@/web/components/customs/Auth/Buttons/SignOAuthButton"
import { CircleIcon } from "@/web/components/customs/Utils/CircleIcon"

type Props = {
  title: string
  description: string
  children: ReactNode
  showOAuth?: boolean
  signup: boolean
}

export function AuthCard({ title, description, children, showOAuth = true, signup }: Props) {
  const t = useTranslations("Global")
  return (
    <div className="flex flex-col border p-6 rounded-lg shadow-lg max-w-md w-full gap-5 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-bold text-center flex items-center gap-2">
          <CircleIcon />
          {title}
        </h1>
        <p className="text-center text-gray-600 text-sm">{description}</p>
      </div>

      {children}

      {showOAuth && (
        <>
          <DividerWithText text={t("or")} />
          <SignOAuthButton />
        </>
      )}
    </div>
  )
}
