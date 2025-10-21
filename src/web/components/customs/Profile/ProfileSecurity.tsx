"use client"

import { Check, Shield } from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

import User from "@/types/User"
import { Button } from "@/web/components/ui/button"

interface ProfileProps {
  user: User
}

export default function ProfileSecurity({ user }: ProfileProps) {
  const t = useTranslations("Profile")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="border rounded-lg p-6 space-y-3"
    >
      <h3 className="font-semibold text-lg flex items-center gap-2">
        <Shield />
        {t("security")}
      </h3>

      <div className="flex justify-between items-center">
        <span>{t("emailVerified")}</span>

        <span
          className={`${user?.emailVerified ? "text-green-600" : "text-red-600"} font-medium flex`}
        >
          {user?.emailVerified ? (
            <>
              <Check />
              <span>{t("verified")}</span>
            </>
          ) : (
            <span>{t("notVerified")}</span>
          )}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span>{t("twoFactorAuthentication")}</span>

        <Button size="sm" disabled>
          {t("configure")}
        </Button>
      </div>
    </motion.div>
  )
}
