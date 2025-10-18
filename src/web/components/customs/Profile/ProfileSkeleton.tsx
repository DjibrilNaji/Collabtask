import ProfileHeader from "@/web/components/customs/Profile/ProfileHeader"
import { Skeleton } from "@/web/components/ui/skeleton"

export default function ProfileSkeleton() {
  return (
    <>
      <ProfileHeader />

      <div className="max-w-2xl mx-auto p-4 space-y-6 animate-pulse">
        <div className="border rounded-lg p-6 flex flex-col items-center gap-4">
          <Skeleton className="w-28 h-28 rounded-full" />
          <div className="text-center space-y-2">
            <Skeleton className="h-5 w-32 mx-auto" />
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>
        </div>

        <div className="border rounded-lg p-6 space-y-3">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="border rounded-lg p-6 space-y-4">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-8 w-24 ml-auto" />
        </div>
      </div>
    </>
  )
}
