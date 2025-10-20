"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { User as UserIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

import { updateUserAction } from "@/actions/update-user"
import { updateFormSchema, UpdateType } from "@/types/formTypes"
import User from "@/types/User"
import { Button } from "@/web/components/ui/button"
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

interface ProfileProps {
  user: User
}

export default function ProfileForm({ user }: ProfileProps) {
  const t = useTranslations()
  const queryClient = useQueryClient()

  const form = useForm<z.infer<typeof updateFormSchema>>({
    resolver: zodResolver(updateFormSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email || ""
    }
  })

  const mutation = useMutation({
    mutationFn: async (data: UpdateType) => {
      if (data.email === user.email && data.name === user.name) {
        return
      }
      await updateUserAction(data)
    },
    onSuccess: async () => {
      toast.success(t("Profile.updatedSuccessfully"))

      if (user.email !== form.getValues("email")) {
        //TODO Add logout here after email change and resend and email to verify new email
      }

      await queryClient.invalidateQueries({ queryKey: ["user"] })
    },
    onError: () => {
      toast.error(t("GlobalErrors.INTERNAL_SERVER_ERROR"))
    }
  })

  const handleUpdate = (values: UpdateType) => {
    mutation.mutate(values)
  }

  return (
    <>
      <div className="border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <UserIcon />
          {t("Profile.personalInfo")}
        </h3>

        <p className="text-gray-500 text-sm">{t("Profile.updateProfileInfo")}</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdate)} className="flex flex-col gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.fullName")}</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Form.email")}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                  <p className="mt-1 text-sm text-gray-500">{t("Profile.emailChangeNotice")}</p>
                </FormItem>
              )}
            />

            <div className="flex justify-end items-center ">
              <Button
                type="submit"
                size="sm"
                effect={"ringHover"}
                disabled={mutation.isPending || !form.formState.isDirty}
              >
                {mutation.isPending ? (
                  <>
                    <Spinner />
                    {t("Form.registration")}
                  </>
                ) : (
                  t("Form.save")
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}
