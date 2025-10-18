"use client"

import { AlertTriangle, RefreshCcw } from "lucide-react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

import { Button } from "@/web/components/ui/button"
import { routes } from "@/web/routes"

interface ErrorStateProps {
  message?: string
}

export function ErrorState({ message }: ErrorStateProps) {
  const t = useTranslations("ErrorState")
  const router = useRouter()

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center py-16 gap-4 text-muted-foreground">
      <AlertTriangle className="w-10 h-10 text-red-500" />
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-1">{t("title")}</h2>
        <p className="text-sm">{message ? message : t("defaultMessage")}</p>
      </div>

      <div className="flex gap-2 mt-2">
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCcw className="w-4 h-4" />
          {t("retry")}
        </Button>

        <Button
          onClick={() => router.push(routes.home)}
          variant="outline"
          className="flex items-center gap-2"
        >
          {t("home")}
        </Button>
      </div>
    </div>
  )
}
