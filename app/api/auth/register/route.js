import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import connectMongo from "@/database/services/connectMongo";
import { Users } from "@/database/models/users-model";

export const POST = async (request) => {
  const { firstName, lastName, email, password } = await request.json();
  const hashedPassword =await bcrypt.hash(password, 5);
  const newUser = {
    firstName,
    lastName,
    email,
    password: hashedPassword, 
  }; 
  
  try {
    await connectMongo();
    const existingUser = await Users.findOne({ email });
    
    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: "Email is already registered. Please Login.",
        status: 409,
      });
    }
    await Users.create(newUser); 
    return NextResponse.json({
      success: true,
      message: "User has been created",
      status: 201,
    });
  } catch (error) { 
   
    return NextResponse.json({
      success: false,
      message: error,
      status: 500,
    });
  }
};
