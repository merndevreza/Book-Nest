import { replaceMongoIdInArray } from "@/utils/replaceMongoID";
import { Categories } from "../models/categories-model";
import connectMongo from "../services/connectMongo";
import { Products } from "../models/products-model";

//All categories
export async function getAllCategories(withCount) {
  try {
    await connectMongo();
    const response = await Categories.find({}).select(["title"]).lean(); 
    let result = response.map(category=>{
      return {
        id:category?._id.toString(),
        name: category?.title,
      }
    });
    if (withCount) {
      const productResponse = await Products.find({
        status: "published",
      })
        .select(["category.details"])
        .lean();
      const categoryIdsInProductsArray = productResponse.map((item) =>
        item?.category?.details.toString()
      );
      result = response.map((category) => {
        const count = categoryIdsInProductsArray.filter(
          (categoryId) => categoryId === category?._id.toString()
        ).length;
        return {
          id: category?._id.toString(),
          name: category?.title,
          count,
        };
      });
    }

    return {
      success: true,
      message: "All Categories",
      data: result,
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
//get All products filtered by category id
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
