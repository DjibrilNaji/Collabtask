"use client"

import { CheckCircle } from "lucide-react"

export function CircleIcon() {
  return (
    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
      <CheckCircle className="w-5 h-5 text-white" />
    </div>
  )
}
