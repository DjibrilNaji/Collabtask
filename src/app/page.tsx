import { Metadata } from "next"

import LandingPage from "@/web/components/customs/LandingPage/LandingPage"

export const metadata: Metadata = {
  title: "Collab Task",
  description: "Welcome to Collab Task - Your task management solution"
}

export default function Home() {
  return <LandingPage />
}
