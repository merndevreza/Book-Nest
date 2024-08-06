"use server";

import { Cart } from "@/database/models/users-cart";
import { Wishlist } from "@/database/models/users-wishlist";
import connectMongo from "@/database/services/connectMongo";

export async function addToWishlist(userId, productId, format) {
  try {
    await connectMongo();
    //check the wishlist
    const found = await Wishlist.findOne({ userId, productId, format });
    if (found) {
      const response = await Wishlist.deleteOne({ userId, productId, format });
      if (response) {
        return {
          success: true,
          message: "Product removed from wishlists",
          status: 409,
        };
      } else {
        return {
          success: false,
          message: "Failed: product remove from wishlist failed.",
          status: 500,
        };
      }
    } else {
      const response = await Wishlist.create({ userId, productId, format });
      if (response) {
        return {
          success: true,
          message: "Product Added to the wishlists",
          status: 201,
        };
      } else {
        return {
          success: false,
          message: "Failed: Product add to wishlist failed.",
          status: 500,
        };
      }
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      status: 500,
    };
  }
}

export async function checkWishlist(userId, productId, format) {
  try {
    await connectMongo();
    const found = await Wishlist.findOne({ userId, productId, format });
    if (found) {
      return {
        success: true,
        message: "Product found in the wishlists",
        isFound: true,
      };
    } else {
      return {
        success: true,
        message: "Product is not found in the wishlists",
        isFound: false,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      status: 500,
    };
  }
}

export async function addToCart(newCartItem) {
  try {
    await connectMongo(); 
    console.log("newCartItem",newCartItem);
    
    const response = await Cart.create(newCartItem);
    console.log(response);
    
    if (response) {
      return { 
        success: true,
        message: "Product Added to the cart",
        status: 201,
      };
    } else {
      return {
        success: false,
        message: "Failed: Product add to cart failed.",
        status: 500,
      };
    }
  } catch (error) {}
}
export async function checkProductInCart(userId, productId, format) {
  try {
    await connectMongo();
    const found = await Cart.findOne({ userId, productId, format });
    if (found) {
      return {
        success: true,
        message: "Product found in the wishlists",
        isFound: true,
      };
    } else {
      return {
        success: true,
        message: "Product is not found in the wishlists",
        isFound: false,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      status: 500,
    };
  }
}
export async function removeFromWishlist(item){
  try {
    await connectMongo();
    const found = await Wishlist.deleteOne(item);
    if (found) {
      return {
        success: true,
        message: "Product found in the wishlists",
        
      };
    } else {
      return {
        success: true,
        message: "Product is not found in the wishlists",
        isFound: false,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      status: 500,
    };
  }
} 