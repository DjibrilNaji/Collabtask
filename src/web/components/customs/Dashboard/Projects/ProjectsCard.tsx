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
    <Link href={routes.workspace(workspace.slug)} className="cursor-none">
      <Card className="cursor-target hover:scale-105 transition-transform duration-200">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <Folder className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">
              {t("Projects.ticketsNumber", { count: workspace._count.Task })}
            </span>
          </div>

          <CardTitle>{workspace.name}</CardTitle>

          <CardFooter className="mt-4 flex flex-nowrap items-center justify-between w-full p-0">
            <span className="text-sm text-muted-foreground">
              {t("Projects.membersNumber", { count: workspace._count.WorkspaceMember })}
            </span>
          </CardFooter>
        </CardHeader>
      </Card>
    </Link>
  )
}
