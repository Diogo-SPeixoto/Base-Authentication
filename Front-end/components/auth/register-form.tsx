"use client"
import { useActionState, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import { signup } from "@/app/actions/auth"
import { InputForm } from "../input-form"
import { FooterAuth } from "./footer-auth"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [response, action, isLoading] = useActionState(signup, undefined)

  return (
    <Card className="border-border shadow-lg">
      <CardContent>
        <form action={action} className="space-y-4">
          <InputForm
            Icon={User}
            error={response?.errors?.name}
            name="name"
            placeholder="You Name"
            title="Full Name"
            required
            disabled={isLoading}
          />

          <InputForm
            Icon={Mail}
            error={response?.errors?.email}
            name="email"
            placeholder="you@example.com"
            title="Email"
            type="email"
            required
            disabled={isLoading}
          />

          <InputForm
            Icon={Lock}
            error={response?.errors?.password}
            name="password"
            title="Password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            required
            disabled={isLoading}
          >
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground cursor-pointer"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </InputForm>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>

      </CardContent>
      <FooterAuth 
        isLoading={isLoading}
        href="/login"
        page="Sign in"
        text="Already have an account?"
      />
    </Card>
  )
}
