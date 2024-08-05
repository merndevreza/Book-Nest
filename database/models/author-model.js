import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
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
  bio: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  totalBooks: {
    type: Number,
    required: true,
    min: 0,
  },
  totalBooksSold: {
    type: Number,
    required: true,
    min: 0,
  },
  avatar: {
    type: String,
    required: false,
  },
  socialLinks: {
    facebook: {
      type: String,
      required: false,
    },
    twitter: {
      type: String,
      required: false,
    },
    linkedIn: {
      type: String,
      required: false,
    },
  },
});

export const Authors =
  mongoose.models.Authors ?? mongoose.model("Authors", authorSchema);
