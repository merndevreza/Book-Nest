import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["author", "admin", "user"],
    default: "user",
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
});

export const Users =
  mongoose.models.Users ?? mongoose.model("Users", usersSchema);
