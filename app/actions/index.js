"use server";
import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData) {
  const providerName = await formData.get("provider");

  await signIn(providerName, {
    callbackUrl: "http://localhost:3000",
  }); 
}
export async function doSignOut() {
  await signOut();
}