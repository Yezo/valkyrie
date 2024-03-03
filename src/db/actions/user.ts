"use server";

import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { db } from "@/db/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { User } from "next-auth";

export async function getUserById(id: string): Promise<User | null> {
  noStore();
  try {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || null;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting user by id");
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  noStore();
  try {
    //Check and find a user that matches emails
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || null;
  } catch (error) {
    throw new Error("Error getting user by email");
  }
}

export async function getAllUsers(): Promise<User[] | null> {
  try {
    //Check and find a user that matches emails
    const [allUsers] = await db.select().from(users);
    return [allUsers] || null;
  } catch (error) {
    throw new Error("Error getting all users");
  }
}
