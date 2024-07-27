import mongoose, { Schema } from "mongoose"; 

const productSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  productTitle: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const shippingAddressSchema = new Schema({
  phone: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
});

const salesModel = new Schema({
  products: {
    type: [productSchema],
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  shippingAddress: {
    type: shippingAddressSchema,
    required: true,
  },
  shippingCost: {
    type: Number,
    required: true,
  },
});
export const Sales =
  mongoose.models.Sales ?? mongoose.model("Sales", salesModel);
