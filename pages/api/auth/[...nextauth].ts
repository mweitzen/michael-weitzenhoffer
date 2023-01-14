import NextAuth from "next-auth/next";
import { type NextAuthOptions } from "next-auth";
//
import GoogleProvider from "next-auth/providers/google";
//
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

/*
 *
 * GUARD
 *
 */
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET)
  throw new Error("Failed to initialize Google authentication");

/*
 *
 * NEXT AUTH OPTIONS
 *
 */
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const allowedDomains = ["@weitzenhoffer.com"];
      const userDomain = user && user.email?.slice(user.email?.indexOf("@"));

      const isAllowedToSignIn =
        userDomain && allowedDomains.includes(userDomain);

      if (isAllowedToSignIn) {
        return true;
      } else {
        return "/unauthorized";
      }
    },
    // async jwt({ token, user }) {
    //   if (user?.email === "mike@weitzenhoffer.com") {
    //     token.userRole = "admin";
    //   } else {
    //     token.userROle = "guest";
    //   }
    //   return token;
    // },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        username: user.email,
      },
    }),
  },
};

export default NextAuth(authOptions);
