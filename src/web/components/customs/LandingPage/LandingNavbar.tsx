import { useTranslations } from "next-intl"
import Link from "next/link"

import { CircleIcon } from "@/web/components/customs/Utils/CircleIcon"
import { Button } from "@/web/components/ui/button"
import { routes } from "@/web/routes"

export default function LandingNavbar() {
  const t = useTranslations("LandingPage")

  return (
    <header className="border-b bg-background/80 sticky top-0 z-50">
      <div className="px-4 h-16 flex items-center justify-between">
        <Link href={routes.home} className="flex items-center gap-2">
          <CircleIcon />
        </Link>

        <div className="flex items-center gap-4">
          <Link href={routes.auth.login.path}>
            <Button variant="ghost" className="border">
              {t("signIn")}
            </Button>
          </Link>

          <Link href={routes.auth.register.path} className="hidden md:flex">
            <Button>{t("signUp")}</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
