import { replaceMongoIdInArray } from "@/utils/replaceMongoID";
import { Products } from "../models/products-model";
import { Reviews } from "../models/reviews-model";
import { Users } from "../models/users-model";
import connectMongo from "../services/connectMongo";

export async function getReviews(limit) {
  try {
    await connectMongo();
    const reviews = await Reviews.find({})
      .select(["product", "user", "rating", "comment", "createdAt"])
      .populate({
        path: "product",
        model: Products,
        select: ["title", "thumbnail", "author"],
      })
      .populate({
        path: "user",
        model: Users,
        select: ["firstName", "lastName", "avatar","name","image"],
      })
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean(); 
      
    return {
      success: true,
      message: "Testimonials",
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
      product: id,
    }).select(["user", "rating", "comment", "createdAt"])
      .populate({
        path: "user",
        model: Users,
        select: ["firstName", "lastName", "avatar","name","image"],
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