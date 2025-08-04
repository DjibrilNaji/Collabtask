import { Metadata } from "next"
import { useTranslations } from "next-intl"

import { AuthCard } from "@/web/components/customs/Auth/AuthForm/AuthCard"
import { AuthHeader } from "@/web/components/customs/Auth/AuthForm/AuthHeader"
import { RegisterForm } from "@/web/components/customs/Auth/AuthForm/RegisterForm"
import { LocaleDropdown } from "@/web/components/customs/Utils/LocaleDropdown"
import { ModeToggle } from "@/web/components/customs/Utils/ModeToggle"

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account"
}

export default function RegisterPage() {
  const t = useTranslations("Form")

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-end mx-2 px-2 py-4 gap-4">
        <LocaleDropdown />
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <AuthHeader />
        <AuthCard title={t("title")} description={t("description")} signup>
          <RegisterForm />
        </AuthCard>
      </div>
    </div>
  )
}
