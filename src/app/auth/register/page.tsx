import { Metadata } from "next"
import { useTranslations } from "next-intl"

import { AuthCard } from "@/web/components/customs/Auth/AuthForm/AuthCard"
import { AuthLayout } from "@/web/components/customs/Auth/AuthForm/AuthLayout"
import { RegisterForm } from "@/web/components/customs/Auth/AuthForm/RegisterForm"

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account"
}

export default function RegisterPage() {
  const t = useTranslations("Form")

  return (
    <AuthLayout>
      <AuthCard title={t("registerTitle")} description={t("description")}>
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  )
}
