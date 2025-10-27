import { Folder } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { Button } from "@/web/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/web/components/ui/empty"

export function NoProject() {
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
          <Button asChild>
            <Link href={""}>{t("Projects.createProject")}</Link>
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  )
}
