import Link from "next/link"

import { Button } from "@/components/ui/button"
import { routes } from "@/constants"

export default function CheckoutSuccessPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#4f46e515,transparent_50%),radial-gradient(circle_at_80%_10%,#06b6d420,transparent_40%),radial-gradient(circle_at_50%_100%,#14b8a625,transparent_45%)] px-6 py-16">
      <section className="relative z-10 w-full max-w-xl rounded-3xl border border-white/20 bg-white/90 p-8 shadow-2xl shadow-indigo-500/10 backdrop-blur-md sm:p-10">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 ring-8 ring-emerald-500/15">
            <svg
              aria-hidden="true"
              className="h-10 w-10 text-emerald-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
        </div>

        <div className="space-y-3 text-center">
          <p className="text-sm font-medium text-emerald-700">
            Subscription successful!
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Your subscription is now active
          </h1>
          <p className="text-balance text-sm text-zinc-600 sm:text-base">
            Thanks! Your payment was received and your account was updated
            immediately. You can now use all premium features.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={routes.dashboard}>Go to dashboard</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link href={routes.home}>Return to home page</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
