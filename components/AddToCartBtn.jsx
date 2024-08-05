"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
const AddToCartBtn = ({ isLoggedIn, productId, format }) => {
  const router = useRouter();
 
  const handleAddToCart=()=>{ 
   if (!isLoggedIn) {
     return router.push("/login");
    }
  }
  return (
    <Button onClick={handleAddToCart} type="button" variant="themePrimary" size="sm">
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
