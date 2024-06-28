import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const CartIcon = ({ className, showTitle }) => {
  return (
    <Button className={className} variant="secondary" size="icon">
      <span className="relative inline-block mt-1">
        <ShoppingCart size={24} />
        <span className="inline-block w-5 h-5 rounded-full bg-themeSecondary text-themeSecondary-foreground absolute -top-2 -right-3 text-sm text-center">
          5
        </span>
      </span>
      {showTitle && <span className="font-semibold">Cart</span>}
    </Button>
  );
};

export default CartIcon;
