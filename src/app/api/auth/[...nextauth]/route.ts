// import NextAuth, { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     }),
//   ],
//   session:{
//     strategy: "jwt"
//   },
//   callbacks: {
//     async jwt({token, user}) {
//       if (user) {
//         token.id = user.id
//       }
//       return token;
//     },
//     async session({session, token}) {
//       if (session.user) {
//         session.user.id = token.id as string
//       }
//       return session
//     }
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   debug: true,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
