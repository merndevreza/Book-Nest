import mongoose, { Schema } from "mongoose";

const categoriesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: false,
  },
});

export const Categories =
  mongoose.models.Categories ?? mongoose.model("Categories", categoriesSchema);
