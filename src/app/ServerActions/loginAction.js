"use server";
import { signIn } from "../auth";

export default async function loginAction(loginDetails) {
  try {
    await signIn("credentials", {
      email: loginDetails.email,
      password: loginDetails.password,
      redirect: false, 
    });
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Invalid email or password");
  }
}
