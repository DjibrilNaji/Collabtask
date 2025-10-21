"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Camera, UserIcon } from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { FormEventHandler, useRef, useState } from "react"
import { toast } from "sonner"

import { upload } from "@/actions/upload"
import User from "@/types/User"
import { Avatar, AvatarFallback, AvatarImage } from "@/web/components/ui/avatar"
import { Button } from "@/web/components/ui/button"
import { Spinner } from "@/web/components/ui/spinner"

interface ProfileCardProps {
  user: User
}

const MAX_FILE_SIZE_MB = 2

export default function ProfileCard({ user }: ProfileCardProps) {
  const t = useTranslations()
  const queryClient = useQueryClient()

  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      toast.error(t("GlobalErrors.ERROR_FILE_SIZE_TOO_LARGE", { size: MAX_FILE_SIZE_MB }))
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
      return
    }

    setPreview(URL.createObjectURL(file))
  }

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => await upload(formData),
    onSuccess: async () => {
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
      setPreview(null)

      toast.success(t("GlobalSuccess.UPLOAD_SUCCESS"))
      await queryClient.invalidateQueries({ queryKey: ["user"] })
    },
    onError: () => {
      toast.error(t("GlobalErrors.INTERNAL_SERVER_ERROR"))
    }
  })

  const handleUpload: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    mutation.mutate(formData)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="border rounded-lg p-6 flex flex-col items-center gap-4"
      >
        <form onSubmit={handleUpload} className="flex flex-col items-center gap-4">
          <div className="relative">
            <Avatar className="w-28 h-28">
              <AvatarImage
                src={preview || user.image}
                alt="Profile picture"
                className="object-cover"
              />
              <AvatarFallback>
                <UserIcon className="h-16 w-16 text-gray-400" />
              </AvatarFallback>
            </Avatar>

            <label className="absolute bottom-0 right-0 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white border-2 border-white cursor-pointer">
              <Camera className="w-5 h-5" />
              <input
                ref={fileInputRef}
                type="file"
                name="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {preview && (
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                effect="ringHover"
                onClick={() => {
                  setPreview(null)
                  if (fileInputRef.current) fileInputRef.current.value = ""
                }}
              >
                {t("Global.cancel")}
              </Button>

              <Button
                className="bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                size="sm"
                type="submit"
                effect="ringHover"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <>
                    <Spinner />
                    {t("Profile.uploading")}
                  </>
                ) : (
                  t("Profile.upload")
                )}
              </Button>
            </div>
          )}
        </form>

        <div className="text-center">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </motion.div>
    </>
  )
}
