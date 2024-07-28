import { replaceMongoIdInArray } from "@/utils/replaceMongoID";
import { Categories } from "../models/categories-model";
import connectMongo from "../services/connectMongo";
import { Products } from "../models/products-model";
import { identityMatrix } from "pdf-lib/cjs/types/matrix";

//All categories
export async function getAllCategories() {
  try {
    await connectMongo();
    const response = await Categories.find({}).lean();
    return {
      success: true,
      message: "All Categories",
      data: replaceMongoIdInArray(response),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

//Available categories: category with no products will be ignored.
export async function getAvailableCategories() {
  try {
    await connectMongo();
    const response = await Products.find({
      status: "published",
    })
      .select(["category"])
      .lean();
    const categories = response.map((item) => {
      return {
        id: item?.category?.details?._id.toString(),
        name: item?.category?.name,
      };
    });
    //uniq categories
    const categoriesWithCount = categories.reduce((acc, { id, title }) => {
      if (!acc[id]) {
        acc[id] = { id, title, count: 0 };
      }
      acc[id].count++;
      return acc;
    }, {});
    const categoriesFinalArray = Object.values(categoriesWithCount);
    return {
      success: true,
      message: "Available Categories",
      data: categoriesFinalArray,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
//get All products with a same category id
export async function getProductsByCategory(categoryId, limit) {
  try {
    await connectMongo(); 
    const products = await Products.find({
      status: "published",
      "category.details": categoryId,
    })
      .limit(limit) 
      .select(["title", "author", "price", "thumbnail"])
      .lean();
    return {
      success: true,
      message: "Category Products",
      data: replaceMongoIdInArray(products),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}