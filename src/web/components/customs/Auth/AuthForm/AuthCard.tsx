import { useTranslations } from "next-intl"
import { ReactNode } from "react"
import { SignOAuthButton } from "../Buttons/SignOAuthButton"
import { DividerWithText } from "./DividerWithText"

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
    <div className="flex flex-col border p-6 rounded-lg shadow-lg max-w-md w-full gap-5">
      <div>
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p className="text-center text-gray-600 text-sm">{description}</p>
      </div>

      {children}

      {showOAuth && (
        <>
          <DividerWithText text={t("or")} />
          <SignOAuthButton signUp={signup ?? false} />
        </>
      )}
    </div>
  )
}
