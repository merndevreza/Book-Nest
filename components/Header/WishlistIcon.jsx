import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "../ui/badge";

const WishlistIcon = ({ className, showTitle }) => {
  return (
    <Link
      href="/wishlist"
      className={cn(
        `bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-2 pt-3 ${className}`
      )}
    >
      <span className="relative inline-block">
        <Heart size={24} />

        <Badge className=" w-5 h-5 rounded-full bg-themeSecondary text-themeSecondary-foreground absolute -top-2 -right-3 text-sm text-center flex justify-center items-center">
          6
        </Badge>
      </span>
      {showTitle && <span className="font-semibold">Wishlist</span>}
    </Link>
  );
};

export default WishlistIcon;
