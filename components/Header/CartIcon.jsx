"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import useCartCount from "@/app/hooks/useCartCount";
import { useEffect } from "react";
import { getCartProductsCount } from "@/database/queries/products.queries";

const CartIcon = ({ session, className, showTitle, lang }) => {
  const { cartCount, setCartCount } = useCartCount();
  useEffect(() => {
    async function getCartCount() {
      if (session?.user) {
        const response = await getCartProductsCount(session?.user.id);
        if (response.success) {
          setCartCount(response.data);
        }
      }
    }
    getCartCount();
  }, []);
  return (
    <div>
      <Link
        href={`/${lang}/cart`}
        className={cn(
          `bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-2 pt-3 ${className}`
        )}
      >
        <span className="relative inline-block">
          <ShoppingCart size={24} />
          
          {session && cartCount >0 && (
            <Badge className=" w-5 h-5 rounded-full bg-themeSecondary text-themeSecondary-foreground absolute -top-2 -right-3 text-sm text-center flex justify-center items-center">
              {cartCount}
            </Badge>
          )}
        </span>
        {showTitle && <span className="font-semibold">Cart</span>}
      </Link>
    </div>
  );
};

export default CartIcon;
