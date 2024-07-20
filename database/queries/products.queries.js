"use server";

import { replaceMongoIdInArray } from "@/utils/replaceMongoID";
import connectMongo from "../services/connectMongo";
import { Products } from "../models/products-model";
import { Authors } from "../models/author-model";
import { Users } from "../models/users-model";

//Featured Products
export async function getFeaturedProducts(limit) {
  try {
    await connectMongo();
    const allFeaturedProducts = await Products.find({
      status: "published",
      featured: true,
    })
      .limit(limit)
      .select(["title", "authorId", "formats", "price", "thumbnail"])
      .populate({
        path: "authorId",
        model: Authors,
        select: ["userId"],
        populate: {
          path: "userId",
          model: Users,
          select: ["firstName", "lastName"],
        },
      })
      .lean();
    return {
      success: true,
      message: "Featured Products",
      data: replaceMongoIdInArray(allFeaturedProducts),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
