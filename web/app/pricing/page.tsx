import { PricingBoard } from "@/components/plan-card"

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Choose Your Perfect Plan
      </h2>
      <p className="mt-2 text-balance text-center text-lg text-muted-foreground tracking-normal sm:mt-4 sm:text-2xl">
        Flexible pricing designed to grow with your needs. when ready.
      </p>
      <PricingBoard />
    </section>
  )
}
