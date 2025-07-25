import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "en"

  const supportedLocales = ["en", "fr"]

  if (!supportedLocales.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`)
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
