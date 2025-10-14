import { ReactNode } from "react"

import { LocaleDropdown } from "@/web/components/customs/Utils/LocaleDropdown"
import { ModeToggle } from "@/web/components/customs/Utils/ModeToggle"

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-end mx-2 px-2 py-4 gap-4">
        <LocaleDropdown />
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center justify-center h-full mx-4">{children}</div>
    </div>
  )
}
