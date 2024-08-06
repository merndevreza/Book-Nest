"use client"
import { Trash2 } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
const RemoveFromWishlistBtn = ({ isLoggedIn, userId, productId, format }) => {
  const handleRemove=async()=>{
    
  }
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleRemove} className="bg-transparent hover:bg-secondary text-destructive border-2 rounded-full border-destructive w-9 h-9 flex place-content-center">
            <span>
              <Trash2 size={20} />
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Remove from wishlist</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RemoveFromWishlistBtn;
