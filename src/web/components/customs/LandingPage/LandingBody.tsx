import { useTranslations } from "next-intl"

export default function LandingBody() {
  const t = useTranslations("LandingPage")

  return <main className="container mx-auto text-center">{t("title")}</main>
}
