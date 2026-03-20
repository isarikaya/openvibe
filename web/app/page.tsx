import { routes } from "@/constants"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start h-screen pt-20">
      <h1 className="text-3xl font-bold text-center">OpenVibe 🤩 </h1>
      <Link
        href={routes.login}
        className="text-2xl text-blue-500 hover:text-blue-600"
      >
        Sign in
      </Link>
    </div>
  )
}
