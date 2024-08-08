"use server";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/replaceMongoID";
import connectMongo from "../services/connectMongo";
import { Products } from "../models/products-model";
import { Authors } from "../models/author-model";
import { Sales } from "../models/sales-model";
import constructFilterPipeline from "@/utils/constructFilterPipeline";
import { Wishlist } from "../models/users-wishlist";
import { Cart } from "../models/users-cart";

//Featured Products
export async function getFeaturedProducts(limit) {
  try {
    await connectMongo();
    const allFeaturedProducts = await Products.find({
      status: "published",
      featured: true,
    })
      .limit(limit)
      .select(["title", "author", "price", "averageRating", "thumbnail"])
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
      .select(["title", "author", "price", "averageRating", "thumbnail"])
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
    const { filter, skip, limit } = constructFilterPipeline(searchparams);
    await connectMongo();
    const response = await Products.find(filter)
      .skip(skip)
      .limit(limit)
      .select(["title", "author", "price", "averageRating", "thumbnail"])
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
export async function countProducts(searchparams) {
  try {
    await connectMongo();
    const { filter } = constructFilterPipeline(searchparams);
    const count = await Products.countDocuments(filter);
    return {
      success: true,
      message: "Count Published Products",
      data: count,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

//Wishlist Page
export async function getWishlist(userId) {
  try {
    await connectMongo();
    const response = await Wishlist.find({ userId })
      .populate({
        path: "productId",
        model: Products,
        select: [
          "title",
          "author.firstName",
          "author.lastName",
          "price",
          "thumbnail",
        ],
      })
      .select(["productId", "format"])
      .lean();
    // replace product Id
    const products = response.map((item) => {
      const product = replaceMongoIdInObject(item.productId);
      return {
        ...item,
        productId: product,
      };
    });
    const productsWithFinalPrice = products.map((item) => {
      const {
        printedNewBook_regularPrice,
        printedNewBook_discountedPrice,
        printedOldBook_regularPrice,
        printedOldBook_discountedPrice,
        ebook_regularPrice,
        ebook_discountedPrice,
        audioBook_regularPrice,
        audioBook_discountedPrice,
      } = item?.productId?.price;

      let discountedPrice;
      let regularPrice;
      if (item?.format === "printedNewBook") {
        discountedPrice = printedNewBook_discountedPrice;
        regularPrice = printedNewBook_regularPrice;
      } else if (item?.format === "printedOldBook") {
        discountedPrice = printedOldBook_discountedPrice;
        regularPrice = printedOldBook_regularPrice;
      } else if (item?.format === "ebook") {
        discountedPrice = ebook_discountedPrice;
        regularPrice = ebook_regularPrice;
      } else if (item?.format === "audioBook") {
        discountedPrice = audioBook_discountedPrice;
        regularPrice = audioBook_regularPrice;
      }

      const finalPrice = {
        discountedPrice,
        regularPrice,
      };
      const product = { ...item?.productId, price: finalPrice };
      return { ...item, productId: product };
    });

    return {
      success: true,
      message: "Wishlist Products",
      data: replaceMongoIdInArray(productsWithFinalPrice),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

//Cart Page
export async function getCartProductsList(userId) {
  try {
    await connectMongo();
    const response = await Cart.find({ userId })
      .populate({
        path: "productId",
        model: Products,
        select: [
          "title",
          "author.firstName",
          "author.lastName",
          "stock",
          "price",
          "thumbnail",
        ],
      })
      .select(["productId", "format", "quantity", "addedAt"])
      .lean();

    // replace product Id
    const products = response.map((item) => {
      const product = replaceMongoIdInObject(item.productId);
      return {
        ...item,
        productId: product,
      };
    });
    // keep product price based on it's chosen format.
    const productsWithFinalPrice = products.map((item) => {
      const {
        printedNewBook_regularPrice,
        printedNewBook_discountedPrice,
        printedOldBook_regularPrice,
        printedOldBook_discountedPrice,
        ebook_regularPrice,
        ebook_discountedPrice,
        audioBook_regularPrice,
        audioBook_discountedPrice,
      } = item?.productId?.price;

      let discountedPrice;
      let regularPrice;

      if (item?.format === "printedNewBook") {
        discountedPrice = printedNewBook_discountedPrice;
        regularPrice = printedNewBook_regularPrice;
      } else if (item?.format === "printedOldBook") {
        discountedPrice = printedOldBook_discountedPrice;
        regularPrice = printedOldBook_regularPrice;
      } else if (item?.format === "ebook") {
        discountedPrice = ebook_discountedPrice;
        regularPrice = ebook_regularPrice;
      } else if (item?.format === "audioBook") {
        discountedPrice = audioBook_discountedPrice;
        regularPrice = audioBook_regularPrice;
      }
      const finalPrice = {
        discountedPrice,
        regularPrice,
      };
      const product = { ...item?.productId, price: finalPrice };
      return { ...item, productId: product };
    });
    return {
      success: true,
      message: "Cart Products",
      data: replaceMongoIdInArray(productsWithFinalPrice),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function getCartProductsCount(userId) {
  try {
    await connectMongo();
    const response = await Cart.find({ userId });
    const count=response.reduce((sum,currentItem)=>{
      return sum + currentItem.quantity
    },0)
    return {
      success: true,
      message: "Count products in cart",
      data: count,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
