"use client"

import { Camera, UserIcon } from "lucide-react"

import User from "@/types/User"
import { Avatar, AvatarFallback, AvatarImage } from "@/web/components/ui/avatar"

interface ProfileCardProps {
  user: User
}

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="border rounded-lg p-6 flex flex-col items-center gap-4">
      <div className="relative">
        <Avatar className="w-28 h-28">
          <AvatarImage className="object-cover" src={user?.avatar_url} alt="Profile picture" />
          <AvatarFallback>
            <UserIcon className="h-18 w-18" />
          </AvatarFallback>
        </Avatar>

        <label className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white border-2 border-white cursor-pointer">
          <input type="file" className="hidden" />
          <Camera />
        </label>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-semibold">{user?.name}</h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>
    </div>
  )
}
