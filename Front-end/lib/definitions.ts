import * as z from 'zod'

export type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    password?: string[]
  }
  message?: string
}
 
export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long.')
    .trim(),
  email: z.email(),
  password: z
    .string()
    .min(8, 'Be at least 8 characters long' )
    .regex(/[a-zA-Z]/, 'Contain at least one letter.')
    .regex(/[0-9]/, 'Contain at least one number.')
    .regex(/[^a-zA-Z0-9]/, 'Contain at least one special character.')
    .trim(),
})
 
export const SigninFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
})
 