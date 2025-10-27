import { UserIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/web/components/ui/avatar"

interface AvatarComponentProps {
  image: string | undefined
  userName?: string
  className?: string
}

export default function AvatarComponent({ image, userName, className }: AvatarComponentProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={image} alt={userName} className="object-cover" />
      <AvatarFallback>
        <UserIcon className="h-16 w-16 text-gray-400" />
      </AvatarFallback>
    </Avatar>
  )
}
