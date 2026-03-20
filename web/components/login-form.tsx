"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field"
import Link from "next/link"
import { routes } from "@/constants"
import { signIn } from "@/lib/auth-client"
import { useState } from "react"
import { Spinner } from "@/components/spinner"
import { FcGoogle } from "react-icons/fc"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false)
  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      await signIn.social({ provider: "google", callbackURL: `${process.env.NEXT_PUBLIC_CLIENT_URL}`+routes.dashboard })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            <Link href={routes.home} className="text-xl">
              🤩 OpenVibe
            </Link>
          </CardTitle>
          <CardDescription>
            The open-source SaaS starter kit for vibe coders.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => signInWithGoogle()}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <FcGoogle />
                  )}
                  Continue with Google
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
