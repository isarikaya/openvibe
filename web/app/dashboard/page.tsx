import { Button } from "@/components/ui/button"
import { UserSession } from "@/components/user-session"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <UserSession />
        <Button asChild size="lg" className="w-full" variant="outline">
          <Link href="/pricing">Upgrade</Link>
        </Button>
      </div>
    </div>
  )
}
