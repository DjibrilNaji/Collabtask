import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

import { createProjectAction } from "@/actions/create-projects"
import { createProjectFormSchema, CreateProjectType } from "@/types/formTypes"
import { Button } from "@/web/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/web/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/web/components/ui/form"
import { Input } from "@/web/components/ui/input"
import { Spinner } from "@/web/components/ui/spinner"
import { Textarea } from "@/web/components/ui/textarea"

interface CreateProjectDialogProps {
  userId: string
}

export function CreateProjectDialog({ userId }: CreateProjectDialogProps) {
  const t = useTranslations()
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof createProjectFormSchema>>({
    resolver: zodResolver(createProjectFormSchema),
    defaultValues: {
      name: "",
      description: ""
    }
  })

  const mutation = useMutation({
    mutationFn: async (data: CreateProjectType) => {
      await createProjectAction(data)
    },
    onSuccess: async () => {
      form.reset()
      toast.success(t("Projects.createdSuccessfully"))
      await queryClient.invalidateQueries({ queryKey: ["user", userId] })
      setOpen(false)
    },
    onError: (err) => {
      if (err instanceof Error && err.message === "PROJECT_NAME_ALREADY_EXISTS") {
        toast.error(t("GlobalErrors.PROJECT_NAME_ALREADY_EXISTS"))
        return
      }

      toast.error(t("GlobalErrors.INTERNAL_SERVER_ERROR"))
    }
  })

  const onSubmit = (data: CreateProjectType) => {
    mutation.mutate(data)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-end">
        <Button size="sm" effect={"ringHover"}>
          {t("Projects.createProject")}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("Projects.createNewProject")}</DialogTitle>
          <DialogDescription>{t("Projects.createProjectDescription")}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Projects.name")}</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={t("Projects.namePlaceholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Projects.description")}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t("Projects.descriptionPlaceholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">{t("Projects.cancel")}</Button>
              </DialogClose>

              <Button type="submit" size="sm" effect={"ringHover"} disabled={mutation.isPending}>
                {mutation.isPending ? (
                  <>
                    <Spinner />
                    {t("Projects.creating")}
                  </>
                ) : (
                  t("Projects.create")
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
