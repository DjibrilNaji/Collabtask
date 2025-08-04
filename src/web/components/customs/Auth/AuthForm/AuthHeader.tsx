"use client"

import { useTranslations } from "next-intl"
import { CircleIcon } from "../../utils/CircleIcon"

export const AuthHeader = () => {
  const t = useTranslations("Form")

  return (
    <div className="flex gap-3 items-center mb-10">
      <CircleIcon />
      <h1 className="text-3xl font-bold">Collab Task</h1>
    </div>
  )
}
