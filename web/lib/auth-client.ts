import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_WORKER_URL,
})

export const { signIn, signOut, useSession } = authClient