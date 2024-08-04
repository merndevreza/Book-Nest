import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.AUTH_Linkedin_CLIENT_ID,
      clientSecret: process.env.AUTH_Linkedin_CLIENT_SECRET,
    }),
  ],
});
