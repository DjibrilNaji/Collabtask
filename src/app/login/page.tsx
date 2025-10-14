import { Metadata } from "next"
import { useTranslations } from "next-intl"

import { AuthCard } from "@/web/components/customs/Auth/AuthForm/AuthCard"
import { AuthLayout } from "@/web/components/customs/Auth/AuthForm/AuthLayout"
import { LoginForm } from "@/web/components/customs/Auth/AuthForm/LoginForm"

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your account"
}

export default function LoginPage() {
  const t = useTranslations("Form")

  return (
    <AuthLayout>
      <AuthCard title={t("loginTitle")} description={t("description")}>
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  )
}
