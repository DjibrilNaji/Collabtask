"use client"

import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"

import { AppSidebarHeader } from "@/web/components/customs/Dashboard/AppSidebar/AppSidebarHeader"
import { AppSidebarSkeleton } from "@/web/components/customs/Dashboard/AppSidebar/AppSidebarSkeleton"
import { ErrorState } from "@/web/components/customs/Utils/ErrorState"
import { SidebarInset } from "@/web/components/ui/sidebar"
import { projectService } from "@/web/services/projects-service"

interface DashboardProps {
  userId: string
}

export function Dashboard({ userId }: DashboardProps) {
  const t = useTranslations()

  const {
    data: user,
    isPending,
    error
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => projectService.getById(userId),
    enabled: !!userId
  })

  if (isPending) {
    return <AppSidebarSkeleton />
  }

  if (error) {
    return <ErrorState message={t("ErrorState.dashboardMessage")} />
  }

  return (
    <SidebarInset>
      <AppSidebarHeader user={user} title={t("Dashboard.title")} />
    </SidebarInset>
  )
}
