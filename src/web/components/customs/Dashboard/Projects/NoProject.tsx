import { Folder } from "lucide-react"
import { useTranslations } from "next-intl"

import { CreateProjectDialog } from "@/web/components/customs/Dashboard/Projects/CreateProjectDialog"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/web/components/ui/empty"

interface NoProjectProps {
  userId: string
}

export function NoProject({ userId }: NoProjectProps) {
  const t = useTranslations()

  return (
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
          <CreateProjectDialog userId={userId} />
        </div>
      </EmptyContent>
    </Empty>
  )
}
