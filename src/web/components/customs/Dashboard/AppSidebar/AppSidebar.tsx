"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

import { NavMain } from "@/web/components/customs/Dashboard/AppSidebar/NavMain"
import { CircleIcon } from "@/web/components/customs/Utils/CircleIcon"
import { ModeToggle } from "@/web/components/customs/Utils/ModeToggle"
import { Separator } from "@/web/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "@/web/components/ui/sidebar"
import { routes } from "@/web/routes"

export function AppSidebar() {
  const t = useTranslations()

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            >
              <Link href={routes.home} className="flex gap-3 items-center">
                <CircleIcon />
                <h1 className="text-xl font-bold">Taskly</h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
      </SidebarContent>

      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <Separator />
        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-sm text-muted-foreground">{t("Global.theme")}</span>
          <ModeToggle />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
