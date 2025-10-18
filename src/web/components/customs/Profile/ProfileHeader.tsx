"use client"

import { ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

import { ModeToggle } from "@/web/components/customs/Utils/ModeToggle"

export default function ProfileHeader() {
  const t = useTranslations()
  const router = useRouter()

  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span className="hidden sm:inline text-sm font-medium">{t("Global.back")}</span>
        </button>

        <div className="text-center">
          <h1 className="sm:text-lg font-semibold leading-none">{t("Profile.myAccount")}</h1>
          <p className="hidden sm:flex text-xs sm:text-sm text-muted-foreground">
            {t("Profile.manageYourInfo")}
          </p>
        </div>

        <ModeToggle />
      </div>
    </header>
  )
}
