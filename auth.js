import { authConfig } from "./auth.config";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialProvider from "next-auth/providers/credentials";
import client from "./database/services/mongoClient";
import { Users } from "./database/models/users-model";
import bcrypt from "bcryptjs";
import connectMongo from "./database/services/connectMongo";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(client, { databaseName: "BookNest" }),
  ...authConfig,
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        await connectMongo();
        try {
          const foundUser = await Users.findOne({
            email: credentials.email,
          });

          if (foundUser) {
            const isMatched = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );

            if (isMatched) {
              return foundUser;
            } else {
              throw new Error("Email or password mismatched");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.AUTH_Linkedin_CLIENT_ID,
      clientSecret: process.env.AUTH_Linkedin_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) { 

      if (account && account.provider === "credentials" && user) {
        token.id = user._id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.role = user.role || "user";
 
      } else if (account && user) {
        await connectMongo();

        try {
          let existingUser = await Users.findOne({ email: profile.email });
 
          if (existingUser) {
            token.id = existingUser._id;
            token.email = existingUser.email;
            token.firstName = existingUser.firstName;
            token.lastName = existingUser.lastName;
            token.role = existingUser.role || "user"; 
          } else {
            const newUser = await Users.create({
              email: profile.email,
              firstName: profile.given_name,
              lastName: profile.family_name,
              role: "user",
            });
            token.id = newUser._id;
            token.email = newUser.email;
            token.firstName = newUser.firstName;
            token.lastName = newUser.lastName;
            token.role = newUser.role || "user"; 
          }
        } catch (error) {
          console.error("Error linking OAuth account:", error);
          throw new Error("Error linking OAuth account");
        }
      }

      if (profile) {
        token.email = profile.email;
        token.firstName = profile.given_name;
        token.lastName = profile.family_name;
        token.name = profile.name;
        token.role = profile.role || "user"; 
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.role = token.role;
      session.user.name = token.name; 

      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
});
