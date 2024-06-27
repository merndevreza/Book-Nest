import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const CartIcon = ({className}) => {
  return (
    <Button className={`relative ${className}`}  variant="secondary" size="icon">
      <ShoppingCart  size={24}/>
      <span className="inline-block w-5 h-5 rounded-full bg-themeSecondary text-themeSecondary-foreground absolute top-0 right-1 text-sm text-center">5</span>
    </Button>
  );
};

export default CartIcon;
