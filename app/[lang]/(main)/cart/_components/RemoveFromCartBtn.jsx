"use client";
import { Trash2 } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { removeFromCart } from "@/app/actions/products.actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  
import useCart from "@/app/hooks/useCart";

const RemoveFromCartBtn = ({ itemQuantity, itemId }) => {
  const { cartCount, setCartCount,setCartProducts } = useCart();
  const handleRemove = async () => {
    const response = await removeFromCart(itemId);
    if (response.success) {
      setCartProducts((prev) => {
        return prev.filter((book) => book.id !== itemId);
      });
      setCartCount(cartCount - itemQuantity);
      toast.success("Removed successfully.");
    }
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleRemove}
            className="bg-transparent hover:bg-red-200 dark:text-red-800 text-red-600 hover:text-red-950 border-2 rounded-full dark:border-red-800 border-red-600 hover:border-red-600 w-9 h-9 flex place-content-center"
          >
            <span>
              <Trash2 size={20} />
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Remove from Cart</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RemoveFromCartBtn;
