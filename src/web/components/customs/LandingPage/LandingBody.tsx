import {
  ArrowRight,
  Bell,
  CheckSquare,
  MessageSquare,
  PlayCircle,
  Rocket,
  Users
} from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import Link from "next/link"

import FeatureCard from "@/web/components/customs/LandingPage/FeatureCard"
import { Button } from "@/web/components/ui/button"
import { routes } from "@/web/routes"

export default function LandingBody() {
  const t = useTranslations("LandingPage")

  return (
    <main className="flex min-h-screen flex-col">
      <section className="px-4 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto max-w-4xl text-center flex flex-col items-center"
        >
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight">
            <span className="block">{t("titleMainPart1")}</span>
            <span className="block">{t("titleMainPart2")}</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
            {t("subtitle1")}
          </p>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground">{t("subtitle2")}</p>

          <div className="flex items-center justify-center gap-3 mt-10">
            <Button size="sm">
              <Link href={routes.demo} className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
                <span>{t("demo")}</span>
              </Link>
            </Button>

            <Button size="sm">
              <Link href={routes.auth.register.path} className="flex items-center gap-2">
                {t("getStarted")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">{t("adopted")}</p>
        </motion.div>
      </section>

      <section className="bg-muted/70">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 py-12 sm:py-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">{t("sectionTitle")}</h2>
            <p className="mt-3 text-muted-foreground">{t("sectionDescription")}</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Users}
              title={t("features.teamCollaboration.title")}
              description={t("features.teamCollaboration.description")}
            />
            <FeatureCard
              icon={CheckSquare}
              title={t("features.taskManagement.title")}
              description={t("features.taskManagement.description")}
            />
            <FeatureCard
              icon={MessageSquare}
              title={t("features.realtimeComments.title")}
              description={t("features.realtimeComments.description")}
            />
            <FeatureCard
              icon={Bell}
              title={t("features.liveNotifications.title")}
              description={t("features.liveNotifications.description")}
            />
            <FeatureCard
              icon={Rocket}
              title={t("features.projectPlanning.title")}
              description={t("features.projectPlanning.description")}
            />
            <FeatureCard
              icon={PlayCircle}
              title={t("features.performance.title")}
              description={t("features.performance.description")}
            />
          </div>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 py-12 sm:py-16 lg:py-20"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold sm:text-3xl">{t("ctaTitle")}</h3>
            <p className="mt-3">{t("ctaDescription")}</p>
            <div className="mt-8">
              <Button size="lg">
                <Link href={routes.auth.register.path}>{t("ctaButton")}</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
