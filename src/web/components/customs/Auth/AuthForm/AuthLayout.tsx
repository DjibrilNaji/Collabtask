import { ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { ReactNode } from "react"

import { LocaleDropdown } from "@/web/components/customs/Utils/LocaleDropdown"
import { ModeToggle } from "@/web/components/customs/Utils/ModeToggle"
import { Button } from "@/web/components/ui/button"
import { routes } from "@/web/routes"

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const t = useTranslations("Global")

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center mx-2 px-2 py-4 gap-4">
        <Link href={routes.home}>
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("home")}
          </Button>
        </Link>

        <div className="flex gap-4">
          <LocaleDropdown />
          <ModeToggle />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full mx-4">{children}</div>
    </div>
  )
}
