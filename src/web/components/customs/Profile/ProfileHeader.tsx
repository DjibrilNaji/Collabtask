"use client"

import { ArrowLeft, LogOut } from "lucide-react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

import { signOutAction } from "@/actions/auth"
import { ModeToggle } from "@/web/components/customs/Utils/ModeToggle"
import { Button } from "@/web/components/ui/button"
import { routes } from "@/web/routes"

export default function ProfileHeader() {
  const t = useTranslations()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOutAction()
  }

  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center">
        <button
          onClick={() => router.push(routes.dashboard)}
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer w-1/3"
        >
          <ArrowLeft size={20} />
          <span className="hidden sm:inline text-sm font-medium">{t("Global.back")}</span>
        </button>

        <div className="flex flex-col items-center w-1/3">
          <h1 className="sm:text-lg font-semibold leading-none">{t("Profile.myAccount")}</h1>
          <p className="hidden sm:flex text-xs sm:text-sm text-muted-foreground">
            {t("Profile.manageYourInfo")}
          </p>
        </div>

        <div className="flex gap-2 w-1/3 justify-end">
          <ModeToggle />
          <Button variant="outline" onClick={handleSignOut} className="hover:bg-red-600/10">
            <span className="hidden md:flex text-red-500">{t("Global.logout")}</span>
            <LogOut size={20} className="flex md:hidden text-red-500" />
          </Button>
        </div>
      </div>
    </header>
  )
}
