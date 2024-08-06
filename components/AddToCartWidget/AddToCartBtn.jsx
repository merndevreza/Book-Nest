"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { addToCart } from "@/app/actions/products.actions";
import { useState } from "react";
const AddToCartBtn = ({
  isFoundInCart,
  isLoggedIn,
  userId,
  productId,
  format,
  quantity,
}) => {
  const router = useRouter();
  const [found, setFound] = useState(isFoundInCart);

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      return router.push("/login");
    }
    const newCartItem = { userId, productId, format, quantity };
    const response = await addToCart(newCartItem);

    if (response?.success) {
      if (format === "ebook" || format === "audioBook") {
        setFound(true);
      }
    }
  };
  return (
    <Button
      disabled={found}
      onClick={handleAddToCart}
      type="button"
      variant="themePrimary"
      size="sm"
    >
      {found ? "Purchased" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartBtn;
