import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import CartBadge from "./CartBadge";

const CartIcon = ({ session, className, showTitle, lang }) => {
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
          {session && <CartBadge />}
        </span>
        {showTitle && <span className="font-semibold">Cart</span>}
      </Link>
    </div>
  );
};

export default CartIcon;
