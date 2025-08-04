import { getUserLocale } from "@/services/locale"
import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async () => {
  const locale = await getUserLocale()

  const supportedLocales = ["en", "fr"]

  if (!supportedLocales.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`)
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
