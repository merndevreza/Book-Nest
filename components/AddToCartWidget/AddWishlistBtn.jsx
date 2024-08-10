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

const AddWishlistBtn = ({isFoundInWishlist,isLoggedIn,userId, productId,format}) => {
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(isFoundInWishlist);
  const handleAddWishlist = async() => {
    if (!isLoggedIn) {
      return router.push("/login");
    }
    const response=await addToWishlist(userId,productId,format)
    if (response?.success) {
      setIsAdded(!isAdded);
      toast.success("Added in wishlist", {
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
