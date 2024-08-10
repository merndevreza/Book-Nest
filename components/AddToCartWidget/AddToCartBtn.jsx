"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { addToCart } from "@/app/actions/products.actions";
import { useEffect, useState } from "react";
import useCartCount from "@/app/hooks/useCartCount";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCartBtn = ({
  isFoundInCart,
  isLoggedIn,
  userId,
  productId,
  format,
  quantity,
  setQuantity
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
      setQuantity(1)
      toast.success("Added in cart.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
