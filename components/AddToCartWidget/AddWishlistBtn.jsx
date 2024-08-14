"use client";
import heartEmpty from "@/public/assets/images/heart-empty.svg";
import heartFilled from "@/public/assets/images/heart-filled.svg";
import Image from "next/image";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useRouter } from "next/navigation";
import { addToWishlist } from "@/app/actions/products.actions";
import { Button } from "../ui/button";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import useWishlist from "@/app/hooks/useWishlist"; 

const AddWishlistBtn = ({
  isFoundInWishlist,
  isLoggedIn,
  userId,
  productId,
  format,
  productInfoForWishlistContext,
}) => { 
  
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(isFoundInWishlist);
  const { setWishlistCount, setWishlistProducts } = useWishlist();
  const handleAddWishlist = async () => {
    if (!isLoggedIn) {
      return router.push("/login");
    }
    const response = await addToWishlist(userId, productId, format);
    if (response?.success) {
      if (isAdded) {
        setWishlistCount((prev) => prev - 1);
        setIsAdded(false);
        toast.success("Removed from wishlist");
      } else {
        setWishlistCount((prev) => prev + 1);
        //add the product in wishlist context
        setWishlistProducts((prev) => [...prev, productInfoForWishlistContext]);
        setIsAdded(true);
        toast.success("Added in wishlist");
      }
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleAddWishlist}
            className="bg-transparent hover:bg-transparent p-0"
          >
            <Image
              src={isAdded ? heartFilled : heartEmpty}
              alt="Add wishlist icon"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to Wishlist</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddWishlistBtn;
/**
 * 
 {
    "id": "66b988166e5d8dcf26cbb4a2",
    "productId": {
        "id": "668b7435829608c69a464e23",
        "title": "Biography of a Legend",
        "author": {
            "firstName": "Michael",
            "lastName": "Johnson"
        },
        "price": {
            "discountedPrice": 7.99,
            "regularPrice": 9.99
        },
        "thumbnail": "https://i.ibb.co/jWvbkZW/book-5.jpg"
    },
    "format": "ebook"
}
*/
