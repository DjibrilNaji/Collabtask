"use client"

import { useQuery } from "@tanstack/react-query"
import { Folder } from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { AppSidebarHeader } from "@/web/components/customs/Dashboard/AppSidebar/AppSidebarHeader"
import { AppSidebarSkeleton } from "@/web/components/customs/Dashboard/AppSidebar/AppSidebarSkeleton"
import { ErrorState } from "@/web/components/customs/Utils/ErrorState"
import { Button } from "@/web/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/web/components/ui/empty"
import { SidebarInset } from "@/web/components/ui/sidebar"
import { userService } from "@/web/services/user-service"

interface DashboardProps {
  userId: string
}

export function Projects({ userId }: DashboardProps) {
  const t = useTranslations()

  const {
    data: user,
    isPending,
    error
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => userService.getById(userId),
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
      <AppSidebarHeader user={user} title={t("Projects.title")} />

      {user.Workspace && user.Workspace.length > 0 ? (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* ProjectList */}
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex h-full"
        >
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Folder />
              </EmptyMedia>

              <EmptyTitle>{t("Projects.noProjectsTitle")}</EmptyTitle>

              <EmptyDescription>{t("Projects.noProjects")}</EmptyDescription>
            </EmptyHeader>

            <EmptyContent>
              <div className="flex gap-2">
                <Button asChild>
                  <Link href="/projects/create">{t("Projects.createProject")}</Link>
                </Button>
              </div>
            </EmptyContent>
          </Empty>
        </motion.div>
      )}
    </SidebarInset>
  )
}
