import { PrismaClient } from "@prisma/client"
import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"

import { sendEmailAction } from "@/actions/send-email"
import { routes } from "@/web/routes"

const prisma = new PrismaClient()

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  emailVerification: {
    sendOnSignUp: true,
    expiresIn: 60 * 60,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ url }) => {
      const link = new URL(url)
      link.searchParams.set("callbackURL", routes.auth.verifyEmail)

      await sendEmailAction({
        to: "najidjibril@gmail.com",
        subject: "Verify your email address",
        meta: {
          description: "Please verify your email address to complete the registration process.",
          link: String(link)
        }
      })
    }
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
    autoSignIn: false
  },
  socialProviders: {
    google: {
      clientId: String(process.env.AUTH_GOOGLE_ID),
      clientSecret: String(process.env.AUTH_GOOGLE_SECRET)
    }
  }
})

export type ErrorCode = keyof typeof auth.$ERROR_CODES | "UNKNOWN"
