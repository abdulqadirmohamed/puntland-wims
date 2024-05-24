import { PrismaAdapter } from "@next-auth/prisma-adapter";
import nextAuth, { AuthOptions } from "next-auth";
import prisma from "@/lib/prismadb";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt"

export const authOptions: AuthOptions = {

  adapter: PrismaAdapter(prisma),

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials?.email || !credentials?.password) {
          return null
        } 
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email
          }
        });
        if (!user || !user.id || !user.password) {
          return null
        }
        const correctPassword = await bcrypt.compare(credentials.password, user.password);
        if (!correctPassword) {
          return null
        }

        return user;
      }

    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
  },


};
const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
