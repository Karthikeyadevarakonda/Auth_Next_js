"use server";
import bcrypt from 'bcryptjs';
import { connectDb } from '../../../utils/Database/connectDb';
import { userModel } from '../../../utils/Models/userModel';

export async function registerAction(data) {
  const { username, email, password } = data;

  if (!username || !email || !password) {
    return { success: false, message: "All fields are required." };
  }

  try {
    await connectDb();

    const ifExist = await userModel.findOne({ email });
    if (ifExist) {
      return { success: false, message: "Email already exists." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({ username, email, password: hashedPassword });

    return { success: true };
  } catch (error) {
    console.error("ERR IN REGISTRATION:", {
      message: error.message,
      stack: error.stack
    });
    return { success: false, message: error.message || "Registration failed" };
  }
}
