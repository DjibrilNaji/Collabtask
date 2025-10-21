import { Metadata } from "next"

import LandingPage from "@/web/components/customs/LandingPage/LandingPage"

export const metadata: Metadata = {
  title: "Taskly",
  description: "Welcome to Taskly - Your task management solution"
}

export default function Home() {
  return <LandingPage />
}
