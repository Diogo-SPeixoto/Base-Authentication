import { RegisterForm } from "@/components/auth/register-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up - User Authentication",
  description: "Create your account",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center from-background via-muted/20 to-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Create account</h1>
          <p className="text-muted-foreground">Fill in your details to create your account</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
