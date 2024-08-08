"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { addToCart } from "@/app/actions/products.actions";
import { useEffect, useState } from "react";
import useCartCount from "@/app/hooks/useCartCount";
const AddToCartBtn = ({
  isFoundInCart,
  isLoggedIn,
  userId,
  productId,
  format,
  quantity,
}) => {
  const router = useRouter();
  const [found, setFound] = useState(false);
  const { setCartCount } = useCartCount();

  useEffect(() => {
    setFound(isFoundInCart);
  }, [isFoundInCart]);

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      return router.push("/login");
    }
    const response = await addToCart(userId, productId, format, quantity);
    if (response?.success) {
      setCartCount((prev) => prev + quantity);
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
      {found ? "Added" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartBtn;
