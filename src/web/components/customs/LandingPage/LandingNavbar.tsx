import Link from "next/link"

import { CircleIcon } from "@/web/components/customs/utils/CircleIcon"
import { ModeToggle } from "@/web/components/customs/utils/ModeToggle"
import { Button } from "@/web/components/ui/button"
import { routes } from "@/web/routes"

export default function LandingNavbar() {
  return (
    <header className="border-b bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={routes.home} className="flex items-center gap-2">
          <CircleIcon />

          <span className="font-bold text-xl">TaskBuddy</span>
        </Link>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href={routes.auth.login}>
            <Button variant="ghost">Sign In</Button>
          </Link>

          <Link href={routes.auth.register}>
            <Button>Try It Now</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
