"use server"

import bcryptjs from "bcryptjs"
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
  updateUserFullNameSchema,
  updateUserUsernameSchema,
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
import { signUpWithPasswordSchema } from "@/validations/auth"
import { DatabaseError } from "pg"
import { DatabasePromise } from "@/types"

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
  rawData: z.infer<typeof updateUserUsernameSchema>,
): Promise<DatabasePromise> {
  noStore()

  try {
    const validatedData = updateUserUsernameSchema.safeParse(rawData)
    if (!validatedData.success) return null

    //Check and find a user that matches id
    const user = await getUserById({ id: validatedData.data.id })
    if (!user) return "not-found"

    //Check if the new username is already in use
    const [dupeUsername] = await db
      .select()
      .from(users)
      .where(ilike(users.username, validatedData.data.newUsername))
    if (dupeUsername) return "user-duplicate"

    //Update the current user with their new username
    const updatedUser = await db
      .update(users)
      .set({ username: validatedData.data.newUsername })
      .where(eq(users.id, validatedData.data.id))

    revalidatePath(`/${validatedData.data.newUsername}`)
    return updatedUser ? "success" : null
  } catch (error) {
    console.error(error)
    throw new Error("Error updating username")
  }
}

export async function updateUserFullName(
  rawData: z.infer<typeof updateUserFullNameSchema>,
): Promise<DatabasePromise> {
  noStore()

  try {
    const validatedData = updateUserFullNameSchema.safeParse(rawData)
    if (!validatedData.success) return null
    const { id, newFullName } = validatedData.data

    //Check and find a user that matches id
    const user = await getUserById({ id: validatedData.data.id })
    if (!user) return "not-found"

    //Update the current user with their new full name
    const updatedUser = await db
      .update(users)
      .set({ name: newFullName })
      .where(eq(users.id, id))

    return updatedUser ? "success" : null
  } catch (error) {
    console.error(error)
    throw new Error("Error updating name")
  }
}

export async function signUpWithPassword(
  rawData: z.infer<typeof signUpWithPasswordSchema>,
): Promise<DatabasePromise> {
  //Validate the user's input
  const validatedData = signUpWithPasswordSchema.safeParse(rawData)

  //If invalidated, return an error on the client side
  if (!validatedData.success) return "invalid-input"

  try {
    //Check if the input's user exists in the database
    const username = await getUserByUsername({
      username: validatedData.data.username,
    })
    if (username) return "user-duplicate"

    //Check if the input's email exists in the database
    const user = await getUserByEmail({ email: validatedData.data.email })
    if (user) return "email-duplicate"

    //Encrypt the password
    const password = await bcryptjs.hash(validatedData.data.password, 10)

    //Insert a new user into the database
    const newUserResponse: any = await db.insert(users).values({
      id: crypto.randomUUID(),
      email: validatedData.data.email,
      username: validatedData.data.username,
      password,
    })

    //If inserting a user failed, return an error
    if (!newUserResponse) return "error"
    revalidatePath("/")
    return newUserResponse ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error signing up with password")
  }
}
