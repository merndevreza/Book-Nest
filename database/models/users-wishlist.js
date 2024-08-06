import mongoose, { Schema } from "mongoose";

const wishlistSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Products",
  },
  format: {
    type: String,
    required: true,
  },
});

export const Wishlist =
  mongoose.models.Wishlist ?? mongoose.model("Wishlist", wishlistSchema);
