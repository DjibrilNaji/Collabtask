"use client"

import { BadgeCheck, Bell, LogOut } from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { signOutAction } from "@/actions/auth"
import { UserProjectsSummary } from "@/types/User"
import { UserMenuItem } from "@/web/components/customs/Dashboard/AppSidebar/UserMenuItem"
import AvatarComponent from "@/web/components/customs/Utils/AvatarComponent"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/web/components/ui/dropdown-menu"
import { Separator } from "@/web/components/ui/separator"
import { SidebarMenuButton, SidebarTrigger } from "@/web/components/ui/sidebar"
import { routes } from "@/web/routes"

interface AppSidebarHeaderProps {
  user: UserProjectsSummary
  title: string
}

export function AppSidebarHeader({ user, title }: AppSidebarHeaderProps) {
  const t = useTranslations()

  const handleSignOut = async () => {
    await signOutAction()
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear justify-between pr-6">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="max-w-fit">
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            >
              <AvatarComponent
                image={user.image}
                userName={user.name}
                className="h-8 w-8 rounded-lg"
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-56 rounded-lg" align="end" sideOffset={4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <AvatarComponent
                  image={user.image}
                  userName={user.name}
                  className="h-8 w-8 rounded-lg"
                />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <Link href={routes.profile}>
                <UserMenuItem
                  className="cursor-pointer"
                  icon={BadgeCheck}
                  label={t("AppSidebar.profile")}
                />
              </Link>

              <UserMenuItem
                className="cursor-pointer"
                icon={Bell}
                label={t("AppSidebar.notification")}
              />
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <UserMenuItem
              icon={LogOut}
              label={t("Global.logout")}
              onClick={handleSignOut}
              className="text-destructive focus:text-destructive cursor-pointer"
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </header>
  )
}
