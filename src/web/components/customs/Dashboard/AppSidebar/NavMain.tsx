"use client"

import { Folder, Home } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/web/components/ui/sidebar"
import { routes } from "@/web/routes"

const navMain = [
  { title: "Dashboard.mainNavigation.dashboard", url: routes.dashboard, icon: Home },
  { title: "Dashboard.mainNavigation.projects", url: routes.projects, icon: Folder }
]

export function NavMain() {
  const t = useTranslations()
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{t("Dashboard.mainNavigation.title")}</SidebarGroupLabel>
      <SidebarMenu>
        {navMain.map((item) => (
          <SidebarMenuItem key={t(item.title)}>
            <Link href={item.url}>
              <SidebarMenuButton
                tooltip={t(item.title)}
                className={`cursor-pointer ${
                  pathname === item.url ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                <item.icon />
                <span>{t(item.title)}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
