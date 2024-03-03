import { DrizzleAdapter } from "@auth/drizzle-adapter";

import { getUserByEmail, getUserById } from "@/db/actions/user";

import { UserRole } from "@/types/next-auth";
import NextAuth, { NextAuthConfig } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { signInWithPasswordSchema } from "@/validations/user";
import { db } from "@/db/db";

export const authConfig = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 daysd
    updateAge: 24 * 60 * 60, // 24 hours
  },
  adapter: DrizzleAdapter(db),
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      async authorize(rawCredentials) {
        const validatedCredentials =
          signInWithPasswordSchema.safeParse(rawCredentials);

        if (validatedCredentials.success) {
          const user = await getUserByEmail(validatedCredentials.data.email);
          //@ts-ignore
          if (!user || !user.password) return null;

          const passwordIsValid = await bcryptjs.compare(
            validatedCredentials.data.password,
            //@ts-ignore
            user.password,
          );

          if (passwordIsValid) return user;
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);
      return !existingUser?.email ? false : true;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      //@ts-ignore
      token.role = existingUser.role;
      //@ts-ignore
      token.username = existingUser.username;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.image = existingUser.image;
      return token;
    },

    async redirect({ baseUrl }) {
      return baseUrl;
    },

    session({ session, token }) {
      if (session.user && token.sub) session.user.id = token.sub;
      if (session.user && token.role)
        session.user.role = token.role as UserRole;
      if (session.user && token.username)
        session.user.username = token.username as UserRole;
      if (session.user && token.name)
        session.user.name = token.name as UserRole;
      if (session.user && token.email)
        session.user.email = token.email as UserRole;
      if (session.user && token.image)
        session.user.image = token.image as UserRole;
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signOut, signIn, update } = NextAuth(authConfig);
