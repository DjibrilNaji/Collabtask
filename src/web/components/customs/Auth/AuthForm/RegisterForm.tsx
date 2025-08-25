"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { LoaderCircleIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

import { signUpEmailAction } from "@/actions/sign-up-email"
import { signupFormSchema, SignupType } from "@/types/formTypes"
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
import { routes } from "@/web/routes"

export const RegisterForm = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const t = useTranslations()

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const mutation = useMutation({
    mutationFn: (values: SignupType) => signUpEmailAction(values),
    onSuccess: async () => {
      form.reset()
      toast.success(t("GlobalSuccess.REGISTRATION_SUCCESS"))
      await queryClient.invalidateQueries({ queryKey: ["users"] })
      router.push(routes.auth.register.success)
    },
    onError: (error) => {
      toast.error(t("GlobalErrors." + error.message))
    }
  })

  const handleRegister = (values: SignupType) => {
    mutation.mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleRegister)} className="flex flex-col gap-5">
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
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("Form.password")}</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" effect="ringHover" disabled={mutation.isPending}>
          {mutation.isPending ? (
            <>
              <LoaderCircleIcon className="-ms-1 animate-spin" size={16} aria-hidden="true" />
              {t("Form.registration")}
            </>
          ) : (
            t("Form.register")
          )}
        </Button>

        <div className="text-center text-sm text-gray-600">
          {t("Form.alreadyHaveAccount")}{" "}
          <Link
            href={routes.auth.login.path}
            className="text-sm text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600 hover:underline"
          >
            {t("Form.login")}
          </Link>
        </div>
      </form>
    </Form>
  )
}
