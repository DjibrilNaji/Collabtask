import { motion } from "motion/react"

import { CircleIcon } from "@/web/components/customs/Utils/CircleIcon"

export default function LandingFooter() {
  return (
    <footer className="border-t py-12">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <CircleIcon />
              <span className="font-bold text-xl">Taskly</span>
            </div>
            <p>© 2025 Taskly.</p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
