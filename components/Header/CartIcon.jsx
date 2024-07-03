import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CartIcon = ({ className, showTitle }) => {
  return (
    <Link href="/cart" className={cn(`bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-2 pt-3 ${className}`)}>
    <span className="relative inline-block">
      <ShoppingCart size={24} />
      <span className="inline-block w-5 h-5 rounded-full bg-themeSecondary text-themeSecondary-foreground absolute -top-2 -right-3 text-sm text-center">
        5
      </span>
    </span>
    {showTitle && <span className="font-semibold">Cart</span>}
  </Link>
  );
};

export default CartIcon;
