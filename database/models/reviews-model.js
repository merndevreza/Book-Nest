import mongoose, { Schema } from "mongoose";

const reviewsSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Products'
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Users'
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const Reviews =
  mongoose.models.Reviews ?? mongoose.model("Reviews", reviewsSchema);
 