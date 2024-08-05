"use client";
import { Button } from "./ui/button";
import heartEmpty from "@/public/assets/images/heart-empty.svg";
import heartFilled from "@/public/assets/images/heart-filled.svg";
import Image from "next/image";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useRouter } from "next/navigation";

const AddWishlistBtn = ({isLoggedIn, productId,format}) => {
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);
  const handleAddWishlist = () => {
    if (!isLoggedIn) {
      return router.push("/login");
    }
    setIsAdded(!isAdded);
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
