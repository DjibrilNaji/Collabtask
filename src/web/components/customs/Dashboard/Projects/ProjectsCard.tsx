import { Folder } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { WorkspaceSummary } from "@/types/Workspace"
import { Card, CardFooter, CardHeader, CardTitle } from "@/web/components/ui/card"
import { routes } from "@/web/routes"

interface ProjectsCardProps {
  workspace: WorkspaceSummary
}

export function ProjectsCard({ workspace }: ProjectsCardProps) {
  const t = useTranslations()

  return (
    <Link href={routes.workspace(workspace.slug)}>
      <Card className="hover:scale-105 transition-transform duration-200 h-40 flex flex-col">
        <CardHeader className="flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Folder className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">
                {t("Projects.ticketsNumber", { count: workspace._count.Task })}
              </span>
            </div>

            <CardTitle>{workspace.name}</CardTitle>
          </div>

          <CardFooter className="p-0 mt-auto">
            <span className="text-sm text-muted-foreground">
              {t("Projects.membersNumber", { count: workspace._count.WorkspaceMember })}
            </span>
          </CardFooter>
        </CardHeader>
      </Card>
    </Link>
  )
}
