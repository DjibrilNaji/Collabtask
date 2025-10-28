import { Folder } from "lucide-react"
import { useFormatter, useNow, useTranslations } from "next-intl"
import Link from "next/link"

import { WorkspaceSummary } from "@/types/Workspace"
import { Card, CardFooter, CardHeader, CardTitle } from "@/web/components/ui/card"
import { routes } from "@/web/routes"

interface ProjectsCardProps {
  workspace: WorkspaceSummary
}

export function ProjectsCard({ workspace }: ProjectsCardProps) {
  const t = useTranslations()
  const format = useFormatter()
  const now = useNow()

  return (
    <Link href={routes.workspace(workspace.slug)}>
      <Card className="hover:scale-105 transition-transform duration-200 h-40 flex flex-col">
        <CardHeader className="flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Folder className="h-5 w-5" aria-hidden="true" />
            </div>

            <CardTitle>{workspace.name}</CardTitle>
          </div>
        </CardHeader>

        <CardFooter className="flex justify-between">
          <span className="text-sm text-muted-foreground">
            {t("Projects.membersNumber", { count: workspace._count.WorkspaceMember })}
          </span>
          <span className="text-sm text-muted-foreground">
            {format.relativeTime(workspace.created_at, now)}
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
