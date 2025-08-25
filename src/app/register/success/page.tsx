import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { Button } from "@/web/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/web/components/ui/card"
import { routes } from "@/web/routes"

export const metadata: Metadata = {
  title: "Registration Success",
  description: "Your account has been successfully created"
}

export default function RegisterSuccessPage() {
  const t = useTranslations()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <Card className="w-full max-w-md p-6">
        <CardHeader className="text-center space-y-2">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
          <CardTitle className="text-2xl">{t("Form.Success.registrationSuccess")}</CardTitle>
          <CardDescription className="text-md">
            {t("Form.Success.emailVerification")}
          </CardDescription>
        </CardHeader>

        <CardFooter className="border-t">
          <Button asChild variant="ghost" className="w-full">
            <Link href={routes.auth.login.path}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("Global.goBackToLogin")}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
