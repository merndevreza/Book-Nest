"use client";
import { useState } from "react";
import QuantityInput from "../QuantityInput";
import AddToCartBtn from "./AddToCartBtn";
import AddWishlistBtn from "./AddWishlistBtn";

const AddToCartWidgetActions = ({
  isLoggedIn,
  userId,
  productId,
  format,
  isFoundInWishlist,
  isFoundInCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-center items-end gap-2">
        <div className="space-y-4">
          {format !== "ebook" && format !== "audioBook" && (
           <div className="flex justify-center">
             <QuantityInput quantity={quantity} setQuantity={setQuantity} />
           </div>
          )}

          <AddToCartBtn
            quantity={quantity}
            userId={userId}
            isLoggedIn={isLoggedIn}
            isFoundInCart={isFoundInCart}
            productId={productId}
            format={format}
          />
        </div>
        <AddWishlistBtn
          userId={userId}
          isLoggedIn={isLoggedIn}
          isFoundInWishlist={isFoundInWishlist}
          productId={productId}
          format={format}
        />
      </div>
    </>
  );
};

export default AddToCartWidgetActions;
