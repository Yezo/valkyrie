import { passwordSchema } from "@/validations/auth"
import { z } from "zod"

export const updateUsernameSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
})

export const settingsSchema = z.object({
  username: z.optional(
    z.string().max(25, {
      message: "Username cannot have more than 25 characters.",
    }),
  ),
  oldPassword: z.optional(
    passwordSchema.regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      {
        message:
          "Password must contain at least 8 characters, including one uppercase, one lowercase, one number and one special character",
      },
    ),
  ),
  newPassword: z.optional(
    passwordSchema.regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      {
        message:
          "Password must contain at least 8 characters, including one uppercase, one lowercase, one number and one special character",
      },
    ),
  ),
})

export type settingsSchemaType = z.infer<typeof settingsSchema>

export const settingsProfileSchema = z.object({
  username: z.union([
    z
      .string()
      .min(3, {
        message: "Username must be at least 3 characters.",
      })
      .max(25, {
        message: "Username cannot have more than 25 characters.",
      }),
    z.literal(""),
  ]),
  name: z.union([
    z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(25, {
        message: "Username cannot have more than 25 characters.",
      }),
    z.literal(""),
  ]),
  bio: z.optional(
    z.string().max(256, {
      message: "Bio cannot have more than 256 characters.",
    }),
  ),
  pronouns: z.optional(
    z.enum(["Do not specify", "They/them", "He/him", "She/her"]),
  ),
  website: z.union([
    z
      .string()
      .min(5, {
        message: "Website must be at least 5 characters.",
      })
      .max(50, {
        message: "Website cannot have more than 50 characters.",
      })
      .url(),
    z.literal(""),
  ]),
})

export const socialMediaSchema = z.union([
  z
    .string()
    .min(1, {
      message: "Username must be at least 1 character(s).",
    })
    .max(30, {
      message: "Username cannot have more than 30 characters.",
    }),
  z.literal(""),
])

export const editProfileSocialMediaSchema = z.object({
  twitter: socialMediaSchema,
  instagram: socialMediaSchema,
  linkedin: socialMediaSchema,
  github: socialMediaSchema,
  youtube: socialMediaSchema,
  twitch: socialMediaSchema,
  tiktok: socialMediaSchema,
  patreon: socialMediaSchema,
  behance: socialMediaSchema,
})

export const getUserByIdSchema = z.object({
  id: z.string(),
})

export const getUserByEmailSchema = z.object({
  email: z.string(),
})

export const getUserByUsernameSchema = z.object({
  username: z.string(),
})

export const getUserSocialMediaSchema = z.object({
  id: z.string(),
})

export const getUserProfileByIdSchema = z.object({
  id: z.string(),
})
