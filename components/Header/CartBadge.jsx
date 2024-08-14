"use client"
import useCart from "@/app/hooks/useCart";
import { Badge } from "../ui/badge";

const CartBadge = () => {
   const {cartCount}=useCart()
   return (
      <Badge className=" w-5 h-5 rounded-full bg-themeSecondary hover:bg-themePrimary text-themeSecondary-foreground absolute -top-2 -right-3 text-sm text-center flex justify-center items-center">
      {cartCount}
    </Badge>
   );
};

export default CartBadge;