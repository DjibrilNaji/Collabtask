import { LucideIcon } from "lucide-react"

import { DropdownMenuItem } from "@/web/components/ui/dropdown-menu"

type UserMenuItemProps = {
  icon: LucideIcon
  label: string
  onClick?: () => void
  className?: string
}

export function UserMenuItem({ icon: Icon, label, onClick, className }: UserMenuItemProps) {
  return (
    <DropdownMenuItem onClick={onClick} className={className}>
      <Icon />
      <span>{label}</span>
    </DropdownMenuItem>
  )
}
