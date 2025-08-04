import { AuthCard } from "@/web/components/customs/Auth/AuthForm/AuthCard"
import { AuthHeader } from "@/web/components/customs/Auth/AuthForm/AuthHeader"
import { RegisterForm } from "@/web/components/customs/Auth/AuthForm/RegisterForm"
import { Metadata } from "next"
import { useTranslations } from "next-intl"

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account"
}

export default function RegisterPage() {
  const t = useTranslations("Form")

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AuthHeader />
      <AuthCard title={t("title")} description={t("description")} signup>
        <RegisterForm />
      </AuthCard>
    </div>
  )
}
