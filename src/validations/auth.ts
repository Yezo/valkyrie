import { z } from "zod"

export const emailSchema = z
  .string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  })
  .min(5, {
    message: "Email must be made of at least 5 characters",
  })
  .max(64, {
    message: "Email must be made of at most 64 characters",
  })
  .email({
    message: "Please enter a valid email address",
  })

export const passwordSchema = z
  .string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  })
  .min(8, {
    message: "Password must be made of at least 8 characters",
  })
  .max(256, {
    message: "Password must be made of at most 256 characters",
  })

export const signInWithPasswordSchema = z.object({
  email: emailSchema,
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }),
})

export const signUpWithPasswordSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: emailSchema,
  password: passwordSchema.regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    {
      message:
        "Password must contain at least 8 characters, including one uppercase, one lowercase, one number and one special character",
    },
  ),
})
