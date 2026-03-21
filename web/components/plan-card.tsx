"use client"

import { useEffect, useMemo, useState } from "react"
import { Box, CircleCheck, Gem, type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { cn } from "@/lib/utils"

interface PricingPlan {
  name: string
  slug: string
  productId: string
  description: string
  price: number
  isRecommended: boolean
  icon: LucideIcon
  features: string[]
  triggerName: string
}

interface CustomerStateResponse {
  activeSubscriptions?: Array<{
    productId: string
  }>
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Pro",
    slug: "pro",
    productId: "3159e957-2a2d-42b0-bf7f-d89789fe40c3",
    description: "Perfect for individuals just getting started.",
    price: 20,
    triggerName: "Get Pro plan",
    isRecommended: false,
    icon: Box,
    features: [
      "1 Project",
      "Basic Components",
      "Email Support",
      "Access to Updates for 6 Months",
      "Community Access",
    ],
  },
  {
    name: "Max",
    slug: "max",
    productId: "02539af0-ea37-43fe-9741-1fe612facd5f",
    description: "Ideal for professionals who need more power.",
    price: 100,
    triggerName: "Get Max plan",
    isRecommended: true,
    icon: Gem,
    features: [
      "Unlimited Projects",
      "Premium Components",
      "Priority Support",
      "Access to Updates for 1 Year",
      "Code Snippets & Templates",
    ],
  },
]

const PlanCard = ({
  plan,
  isActive,
  onCheckout,
}: {
  plan: PricingPlan
  isActive: boolean
  onCheckout: (plan: PricingPlan) => Promise<void>
}) => {
  return (
    <div
      className={cn(
        "shadow/5 relative rounded-lg border bg-background transition-colors",
        isActive && "border-green-500 bg-green-50/30 dark:bg-green-950/10",
      )}
    >
      {isActive && (
        <Badge className="absolute top-3 right-3 bg-green-600 text-white hover:bg-green-600">
          Current Plan
        </Badge>
      )}
      {plan.isRecommended && (
        <Badge className="absolute top-3 right-3">Most Popular</Badge>
      )}
      <div className="rounded-t-lg border-b border-dashed p-6">
        <plan.icon className="mb-5 text-primary" />
        <div className="flex items-center gap-1">
          <h3 className="font-semibold text-2xl">{plan.name}</h3>
        </div>
        <p className="my-2 text-muted-foreground">{plan.description}</p>
      </div>
      <div className="px-6 pt-5 pb-10">
        <div className="mt-4 flex items-end gap-1">
          <p className="font-semibold text-4xl">${plan.price}</p>
          <span className="font-medium text-lg text-muted-foreground tracking-tight">
            /month
          </span>
        </div>
        <Button
          className="my-6 w-full"
          size="lg"
          variant={
            isActive ? "secondary" : plan.isRecommended ? "default" : "outline"
          }
          disabled={isActive}
          onClick={() => onCheckout(plan)}
        >
          {isActive ? "Current plan" : plan.triggerName}
        </Button>
        <ul className="mt-4 space-y-2">
          {plan.features.map((feature) => (
            <li className="flex items-center gap-2" key={feature}>
              <CircleCheck className="size-4 shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function PricingBoard() {
  const [activeProductIds, setActiveProductIds] = useState<string[]>([])

  useEffect(() => {
    const getCustomerState = async () => {
      try {
        const { data } = await authClient.customer.state()
        const customerState = data as CustomerStateResponse | null

        setActiveProductIds(
          customerState?.activeSubscriptions?.map(
            (subscription) => subscription.productId,
          ) ?? [],
        )
      } catch {
        setActiveProductIds([])
      }
    }

    void getCustomerState()
  }, [])

  const activePlanNames = useMemo(() => {
    return pricingPlans
      .filter((plan) => activeProductIds.includes(plan.productId))
      .map((plan) => plan.name)
  }, [activeProductIds])

  const handleCheckout = async (plan: PricingPlan) => {
    await authClient.checkout({
      products: [plan.productId],
      slug: plan.slug,
    })
  }

  return (
    <div className="mt-12">
      {activePlanNames.length > 0 && (
        <p className="mb-4 text-center text-sm text-muted-foreground">
          Active subscription plan:{" "}
          <span className="font-medium text-foreground">
            {activePlanNames.join(", ")}
          </span>
        </p>
      )}

      <div className="grid grid-cols-1 gap-1 rounded-xl border bg-muted/40 p-1 sm:grid-cols-2 md:mx-auto md:max-w-2xl md:grid-cols-2">
        {pricingPlans.map((plan) => (
          <PlanCard
            key={plan.productId}
            isActive={activeProductIds.includes(plan.productId)}
            onCheckout={handleCheckout}
            plan={plan}
          />
        ))}
      </div>
    </div>
  )
}
