"use client"

import { LanguagesIcon } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"

import { Locale } from "@/i18n/config"
import { setUserLocale } from "@/services/locale"
import { Button } from "@/web/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/web/components/ui/dropdown-menu"

export function LocaleDropdown() {
  const [isPending, startTransition] = useTransition()
  const t = useTranslations("LocaleSwitcher")
  const locale = useLocale()

  const handleThemeChange = (value: string) => {
    const locale = value as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={isPending}>
        <Button variant="outline" size="icon">
          <LanguagesIcon className="h-6 w-6" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleThemeChange("en")}
          className={`${locale === "en" ? "font-bold" : ""}`}
        >
          🇬🇧 {t("en")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("fr")}
          className={`${locale === "fr" ? "font-bold" : ""}`}
        >
          🇫🇷 {t("fr")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
