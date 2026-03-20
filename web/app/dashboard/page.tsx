import { UserSession } from "@/components/user-session"

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <UserSession />
      </div>
    </div>
  )
}
