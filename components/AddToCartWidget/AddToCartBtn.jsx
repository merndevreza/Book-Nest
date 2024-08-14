"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { addToCart } from "@/app/actions/products.actions";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCart from "@/app/hooks/useCart";

const AddToCartBtn = ({
  isFoundInCart,
  isLoggedIn,
  userId,
  productId,
  format,
  quantity,
  setQuantity,
  productInfoForCartContext,
}) => {
  const router = useRouter();
  const { setCartCount, cartProducts, setCartProducts } = useCart();

  //check if ebook or audioBook format is already added in cart
  const [found, setFound] = useState(false);
  useEffect(() => {
    setFound(isFoundInCart);
  }, [isFoundInCart]);

  //Add to cart
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

      // Check if the product is already in the context
      const foundInCartContext = cartProducts.find(
        (item) => item.productId.id === productId && item.format === format
      );

      if (foundInCartContext) {
        // Update the quantity of the existing product
        const updatedProducts = cartProducts.map((item) =>
          item.productId.id === productId && item.format === format
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        setCartProducts(updatedProducts);
      } else {
        // Add the new product to the cart
        setCartProducts((prev) => [
          ...prev,
          { ...productInfoForCartContext, quantity },
        ]);
      }

      toast.success("Added in cart");

      // Reset quantity
      setQuantity(1);
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
