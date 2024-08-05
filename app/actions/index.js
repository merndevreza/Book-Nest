"use server";
import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData) {
  const providerName = await formData.get("provider");

  const response=await signIn(providerName, { 
    callbackUrl: 'http://localhost:3000',
  }); 
  return response;
}
export async function doSignOut() {
  await signOut();
}

export async function doCredentialLogin(data) {
  try {
    const response = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      callbackUrl: 'http://localhost:3000',
    }); 
    return response;
  } catch (error) {
    throw error
  }
}
