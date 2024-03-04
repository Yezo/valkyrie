"use server"

import { unstable_noStore as noStore, revalidatePath } from "next/cache"
import { db } from "@/db/db"
import { users } from "@/db/schema"
import { eq, ilike } from "drizzle-orm"
import { User } from "next-auth"
import {
  getUserByEmailSchema,
  getUserByIdSchema,
  getUserByUsernameSchema,
  getUserProfileByIdSchema,
  getUserSocialMediaSchema,
} from "@/validations/user"
import {
  psGetAllUsers,
  psGetUserByEmail,
  psGetUserById,
  psGetUserByUsername,
  psGetUserProfileById,
  psGetUserSocialMedia,
} from "@/db/prepared/statements"
import { z } from "zod"

export async function getUserById(
  rawData: z.infer<typeof getUserByIdSchema>,
): Promise<User | null> {
  try {
    const validatedData = getUserByIdSchema.safeParse(rawData)
    if (!validatedData.success) return null

    noStore()
    const [user] = await psGetUserById.execute({ id: validatedData.data.id })
    return user || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by id")
  }
}

export async function getAllUsers(): Promise<User[] | null> {
  try {
    noStore()
    const [user] = await psGetAllUsers.execute()
    return [user] || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by id")
  }
}

export async function getUserByEmail(
  rawData: z.infer<typeof getUserByEmailSchema>,
): Promise<User | null> {
  try {
    const validatedData = getUserByEmailSchema.safeParse(rawData)
    if (!validatedData.success) return null

    noStore()
    const [user] = await psGetUserByEmail.execute({
      email: validatedData.data.email,
    })
    return user || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by email")
  }
}

export async function getUserByUsername(
  rawData: z.infer<typeof getUserByUsernameSchema>,
): Promise<User | null> {
  try {
    const validatedData = getUserByUsernameSchema.safeParse(rawData)
    if (!validatedData.success) return null

    noStore()
    const [user] = await psGetUserByUsername.execute({
      username: validatedData.data.username,
    })
    return user || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by username")
  }
}

export async function getUserSocialMedia(
  rawData: z.infer<typeof getUserSocialMediaSchema>,
) {
  try {
    const validatedData = getUserSocialMediaSchema.safeParse(rawData)
    if (!validatedData.success) return null

    noStore()
    const [user] = await psGetUserSocialMedia.execute({
      id: validatedData.data.id,
    })

    return user || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user social media links")
  }
}

export async function getUserProfileById(
  rawData: z.infer<typeof getUserProfileByIdSchema>,
) {
  try {
    const validatedData = getUserProfileByIdSchema.safeParse(rawData)
    if (!validatedData.success) return null

    noStore()

    const [user] = await psGetUserProfileById.execute({
      id: validatedData.data.id,
    })

    revalidatePath("/settings/profile")

    return user || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user's profile by id")
  }
}

export async function updateUserUsername(
  id: string,
  newUsername: string,
): Promise<"not-found" | "success" | "duplicate" | null> {
  noStore()
  try {
    //Check and find a user that matches id
    const [user] = await db.select().from(users).where(eq(users.id, id))
    if (!user) return "not-found"

    //Check if the new username is already in use
    const [dupeUsername] = await db
      .select()
      .from(users)
      .where(ilike(users.username, newUsername))
    if (dupeUsername) return "duplicate"

    //Update the current user with their new username
    const updatedUser = await db
      .update(users)
      .set({ username: newUsername })
      .where(eq(users.id, id))

    revalidatePath("/username")
    return updatedUser ? "success" : null
  } catch (error) {
    console.error(error)
    throw new Error("Error updating username")
  }
}

export async function updateUserFullName(
  id: string,
  newFullName: string,
): Promise<"not-found" | "success" | null> {
  noStore()
  try {
    //Check and find a user that matches id
    const [user] = await db.select().from(users).where(eq(users.id, id))
    if (!user) return "not-found"

    //Update the current user with their new full name
    const updatedUser = await db
      .update(users)
      .set({ name: newFullName })
      .where(eq(users.id, id))

    revalidatePath("/username")
    return updatedUser ? "success" : null
  } catch (error) {
    console.error(error)
    throw new Error("Error updating name")
  }
}
