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

export async function addToCart(userId, productId, format, quantity) {
  try {
    await connectMongo(); 
    // Update product
    // if (format!=="ebook" && format!=="audioBook") { 
    //   if (format==="printedNewBook") {
        
    //   }else if(format==="printedOldBook"){

    //   }
    // } 
    // Find if the product already exists in the cart for the user
    const existingCartItem = await Cart.findOne({ userId, productId, format });

    if (existingCartItem) {
      // If the product exists, update the quantity
      existingCartItem.quantity += quantity;
      await existingCartItem.save();

      return {
        success: true,
        message: "Product quantity updated in the cart",
        status: 200,
      };
    } else {
      // If the product doesn't exist, create a new cart item
      const newCartItem = await Cart.create({ userId, productId, format, quantity });
      
      if (newCartItem) {
        return {
          success: true,
          message: "Product added to the cart",
          status: 201,
        };
      } else {
        return {
          success: false,
          message: "Failed: Product add to cart failed.",
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
export async function checkDigitalProductInCart(userId, productId, format) {
  try {
    await connectMongo();
    const found = await Cart.findOne({ userId, productId, format });

    if (found) {
      return {
        success: true,
        message: "Product found in the Cart",
        isFound: true,
      };
    } else {
      return {
        success: true,
        message: "Product is not found in the Cart",
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
export async function removeFromWishlist(item) {
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
export async function removeFromCart(itemId) {
  try {
    await connectMongo();
    const response = await Cart.findByIdAndDelete(itemId);
    console.log("delete response", response);

    if (response) {
      return {
        success: true,
        message: "Product is deleted from cart",
      };
    } else {
      return {
        success: false,
        message: "Product is not deleted from cart",
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
