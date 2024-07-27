import { replaceMongoIdInArray } from "@/utils/replaceMongoID";
import { Authors } from "../models/author-model";
import { Products } from "../models/products-model";
import { Reviews } from "../models/reviews-model";
import { Users } from "../models/users-model";
import connectMongo from "../services/connectMongo";
import mongoose from "mongoose";

export async function getReviews(limit) {
  try {
    await connectMongo();
    const reviews = await Reviews.find()
      .select(["productId", "userId", "rating", "comment", "createdAt"])
      .populate({
        path: "productId",
        model: Products,
        select: ["title", "thumbnail", "authorId"],
        populate: {
          path: "authorId",
          model: Authors,
          select: ["userId"],
          populate: {
            path: "userId",
            model: Users,
            select: ["firstName", "lastName"],
          },
        },
      })
      .populate({
        path: "userId",
        model: Users,
        select: ["firstName", "lastName", "avatar"],
      })
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();
    return {
      success: true,
      message: "Featured Testimonials",
      data: replaceMongoIdInArray(reviews),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function getReviewsByProductId(id) {
  try {
    await connectMongo();  
    const reviews = await Reviews.find({
      productId: id,
    }).select(["userId", "rating", "comment", "createdAt"])
      .populate({
        path: "userId",
        model: Users,
        select: ["firstName", "lastName", "avatar"],
      })
      .sort({ createdAt: -1 })
      .lean();
  
    return {
      success: true,
      message: "Single product reviews",
      data: replaceMongoIdInArray(reviews),
    };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { success: false, message: error.message };
  }
}