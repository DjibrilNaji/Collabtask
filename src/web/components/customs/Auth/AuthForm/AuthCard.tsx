"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { ReactNode } from "react"

import { DividerWithText } from "@/web/components/customs/Auth/AuthForm/DividerWithText"
import { SignOAuthButton } from "@/web/components/customs/Auth/Buttons/SignOAuthButton"
import { CircleIcon } from "@/web/components/customs/Utils/CircleIcon"

type AuthCardProps = {
  title: string
  description: string
  children: ReactNode
  showOAuth?: boolean
}

export function AuthCard({ title, description, children, showOAuth = true }: AuthCardProps) {
  const t = useTranslations("Global")
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col border p-6 rounded-lg shadow-lg max-w-md w-full gap-5 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center gap-2 mb-5">
        <h1 className="text-2xl font-bold text-center flex items-center gap-2">
          <CircleIcon />
          {title}
        </h1>
        <p className="text-center text-gray-600 text-sm">{description}</p>
      </div>

      {children}

      {showOAuth && (
        <>
          <DividerWithText text={t("or")} />
          <SignOAuthButton />
        </>
      )}
    </motion.div>
  )
}
