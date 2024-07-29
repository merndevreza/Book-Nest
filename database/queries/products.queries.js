"use server";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/replaceMongoID";
import connectMongo from "../services/connectMongo";
import { Products } from "../models/products-model";
import { Authors } from "../models/author-model";
import { Users } from "../models/users-model";
import { Sales } from "../models/sales-model";
import constructFilterPipeline from "@/utils/constructFilterPipeline";

//Featured Products
export async function getFeaturedProducts(limit) {
  try {
    await connectMongo();
    const allFeaturedProducts = await Products.find({
      status: "published",
      featured: true,
    })
      .limit(limit)
      .select(["title", "author", "price","averageRating", "thumbnail"])
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
//Latest Products
export async function getLatestProducts(limit) {
  try {
    await connectMongo();
    const latestProducts = await Products.find({
      status: "published",
    })
      .sort({ createdAt: -1 })
      .limit(limit)
      .select(["title", "author", "price","averageRating", "thumbnail"])
      .lean();
    return {
      success: true,
      message: "Featured Products",
      data: replaceMongoIdInArray(latestProducts),
    };
  } catch (error) {}
}
//Best Selling Products
export async function getBestSellingProducts(limit) {
  try {
    await connectMongo();
    const soldProducts = await Sales.find({}).select(["products"]).lean();
    const products = soldProducts.map((item) => item?.products).flat();
    const productsIds = products.map((item) => item?.productId);
    const productsIdsString = productsIds.map((id) => id.toString());
    const uniqSet = new Set(productsIdsString);
    const arraySet = [...uniqSet];
    const newProducts = await Promise.allSettled(
      arraySet.map(async (id) => {
        const product = await Products.findById(id)
          .limit(limit)
          .select(["title", "author", "price", "averageRating", "thumbnail"])
          .lean();
        return product;
      })
    );
    const productsData = newProducts.map((item) => item.value);
    return {
      success: true,
      message: "Best selling  Products",
      data: replaceMongoIdInArray(productsData),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

//Product Details
export async function getProductDetails(id) {
  try {
    await connectMongo();
    const product = await Products.findById(id)
      .populate({
        path: "author.details",
        model: Authors,
        populate: {
          path: "user",
          model: Users,
        },
      })
      .lean();
    return {
      success: true,
      message: "Product Details",
      data: replaceMongoIdInObject(product),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

//Shop page
export async function getAllProductsShop(searchparams) {
  try {
    const { filter } = constructFilterPipeline(searchparams);  
    await connectMongo();
    const response = await Products.find(filter)
      .select(["title", "author", "price","averageRating", "thumbnail"])
      .lean();  
    return {
      success: true,
      message: "Filtered Products",
      data: replaceMongoIdInArray(response),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
export async function countPublishedProducts(){
try {
  await connectMongo()
  const count= await Products.countDocuments({
    status: "published",
  })
  return {
    success: true,
    message: "Count Published Products",
    data:count,
  };
} catch (error) {
  return { success: false, message: error.message };
}
}