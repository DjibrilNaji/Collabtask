import { CircleIcon } from "@/web/components/customs/Utils/CircleIcon"

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <CircleIcon />
            <span className="font-bold text-xl">TaskBuddy</span>
          </div>
          <p className="text-gray-400">© 2025 TaskBuddy.</p>
        </div>
      </div>
    </footer>
  )
}
