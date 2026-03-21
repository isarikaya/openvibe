import { createAuthClient } from "better-auth/react"
import { polarClient } from "@polar-sh/better-auth/client"
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_WORKER_URL,
  plugins: [polarClient()],
})

export const { signIn, signOut, useSession } = authClient
