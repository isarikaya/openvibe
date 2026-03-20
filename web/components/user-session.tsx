"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { signOut, useSession } from "@/lib/auth-client"
import { Skeleton } from "./ui/skeleton"
import { useRouter } from "next/navigation"
import { routes } from "@/constants"

export function UserSession() {
  const router = useRouter()
  const { data } = useSession()
  if (!data) return null

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push(routes.home)
        },
      },
    })
  }
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <Avatar className="size-16">
        {data.user.image && <AvatarImage src={data.user.image} alt={data?.user?.name} />}
        <AvatarFallback>{data?.user?.name?.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center gap-1">
        <p className="text-sm font-bold">{data?.user?.name}</p>
        <p className="text-xs text-gray-500">{data?.user?.email}</p>
      </div>
      <Button size={"xs"} className="cursor-pointer" onClick={handleSignOut}>
        Log Out
      </Button>
    </div>
  )
}
