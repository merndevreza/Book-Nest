import { Heart } from "lucide-react";
import { Button } from "../ui/button";

const WishlistIcon = ({className,showTitle}) => {
  return (
    <Button className={className} variant="secondary" size="icon">
      <span className="relative inline-block">
        <Heart size={24} />
        <span className="inline-block w-5 h-5 rounded-full bg-themeSecondary text-themeSecondary-foreground absolute -top-2 -right-3 text-sm text-center">
          5
        </span>
      </span>
      {showTitle && <span className="font-semibold">Wishlist</span>}
    </Button>
  );
};

export default WishlistIcon;
