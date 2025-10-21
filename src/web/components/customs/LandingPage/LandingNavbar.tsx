import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@heroui/react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { useState } from "react"

import { signOutAction } from "@/actions/auth"
import { useSession } from "@/lib/auth-client"
import { CircleIcon } from "@/web/components/customs/Utils/CircleIcon"
import { ModeToggle } from "@/web/components/customs/Utils/ModeToggle"
import { Button } from "@/web/components/ui/button"
import { routes } from "@/web/routes"

const menuItems = [
  { key: "introduction", href: "#", needSession: false },
  { key: "profile", href: routes.profile, needSession: true },
  { key: "dashboard", href: routes.dashboard, needSession: true },
  { key: "helpFeedback", href: "#", needSession: false }
]

export default function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const t = useTranslations("LandingPage")
  const { data: session, isPending } = useSession()

  const handleSignOut = async () => {
    await signOutAction()
  }

  if (isPending) {
    return <div className="py-8" />
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Navbar onMenuOpenChange={setIsMenuOpen} className="border-b">
        <NavbarContent justify="start">
          <NavbarBrand className="flex gap-4">
            <CircleIcon />
            <p className="font-bold">Taskly</p>
          </NavbarBrand>
        </NavbarContent>

        {!session && (
          <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarItem>
              <Link color="foreground" href={routes.demo} size="sm">
                {t("menu.introduction")}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" size="sm">
                {t("menu.pricing")}
              </Link>
            </NavbarItem>
          </NavbarContent>
        )}

        <NavbarContent justify="end">
          {session ? (
            <>
              <Button size="sm" variant="outline" className="hidden md:flex">
                <Link href={routes.dashboard} size="sm" className="hidden md:flex">
                  <span>{t("dashboard")}</span>
                </Link>
              </Button>
              <Button
                onClick={handleSignOut}
                size="sm"
                variant="outline"
                className="hidden md:flex hover:bg-red-600/10"
              >
                <span className="text-red-500">{t("signOut")}</span>
              </Button>
            </>
          ) : (
            <>
              <NavbarItem className="hidden md:flex">
                <Link href={routes.auth.login.path} size="sm">
                  {t("signIn")}
                </Link>
              </NavbarItem>

              <NavbarItem className="hidden md:flex">
                <Button size="sm" variant="outline" className="hidden md:flex">
                  <Link
                    href={routes.auth.register.path}
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    {t("signUp")}
                  </Link>
                </Button>
              </NavbarItem>
            </>
          )}

          <NavbarItem className="hidden md:flex">
            <ModeToggle />
          </NavbarItem>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden cursor-pointer"
          />
        </NavbarContent>

        <NavbarMenu>
          {menuItems
            .filter((item) => !item.needSession || session)
            .map((item, index) => (
              <NavbarMenuItem key={item.key}>
                <Link className="w-full" href={item.href} size="lg">
                  {t(item.key)}
                </Link>
              </NavbarMenuItem>
            ))}

          {session ? (
            <NavbarMenuItem>
              <Link onClick={handleSignOut} className="w-full" href="#" size="lg">
                <span className="text-red-500">{t("signOut")}</span>
              </Link>
            </NavbarMenuItem>
          ) : (
            <>
              <NavbarMenuItem>
                <Link className="w-full" href={routes.auth.login.path} size="lg">
                  {t("signIn")}
                </Link>
              </NavbarMenuItem>

              <NavbarMenuItem>
                <Link className="w-full" href={routes.auth.register.path} size="lg">
                  {t("signUp")}
                </Link>
              </NavbarMenuItem>
            </>
          )}
        </NavbarMenu>
      </Navbar>
    </motion.nav>
  )
}
