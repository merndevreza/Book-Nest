import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
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
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  addedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const Cart = mongoose.models.Cart ?? mongoose.model("Cart", cartSchema);
