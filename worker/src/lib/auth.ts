import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { db } from "./db/prisma"
import { oAuthProxy } from "better-auth/plugins"
import { Polar } from "@polar-sh/sdk"
import { checkout, polar, portal } from "@polar-sh/better-auth"

const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  server: "sandbox",
})

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  database: prismaAdapter(db, { provider: "sqlite" }),
  plugins: [
    oAuthProxy(),
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "3159e957-2a2d-42b0-bf7f-d89789fe40c3",
              slug: "pro",
            },
            {
              productId: "02539af0-ea37-43fe-9741-1fe612facd5f",
              slug: "max",
            },
          ],
          authenticatedUsersOnly: true,
          successUrl: `${process.env.CLIENT_URL}/checkout/success?checkout_id={CHECKOUT_ID}`,
          returnUrl: `${process.env.CLIENT_URL}/dashboard`,
        }),
        portal(),
      ],
    }),
  ],
  trustedOrigins: [process.env.CLIENT_URL as string],
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  advanced: {
    defaultCookieAttributes: {
      sameSite: "none",
      secure: true,
    },
    crossSubDomainCookies: {
      enabled: true,
      domain:
        process.env.NODE_ENV === "development"
          ? "localhost"
          : ".isarikaya.workers.dev",
    },
  },
})
