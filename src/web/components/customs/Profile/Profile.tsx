"use client"

import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"

import ProfileCard from "@/web/components/customs/Profile/ProfileCard"
import ProfileForm from "@/web/components/customs/Profile/ProfileForm"
import ProfileHeader from "@/web/components/customs/Profile/ProfileHeader"
import Security from "@/web/components/customs/Profile/ProfileSecurity"
import ProfileSkeleton from "@/web/components/customs/Profile/ProfileSkeleton"
import { ErrorState } from "@/web/components/customs/Utils/ErrorState"
import { userService } from "@/web/services/user-service"

interface ProfileProps {
  userId: string
}

export default function Profile({ userId }: ProfileProps) {
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
    return <ProfileSkeleton />
  }

  if (error) {
    return <ErrorState message={t("ErrorState.profileMessage")} />
  }

  return (
    <>
      <ProfileHeader />

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <ProfileCard user={user} />
        <Security user={user} />
        <ProfileForm user={user} />
      </div>
    </>
  )
}
