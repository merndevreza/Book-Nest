import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
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
