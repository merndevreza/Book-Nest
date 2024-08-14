"use client";
import useWishlist from "@/app/hooks/useWishlist";
import { Badge } from "../ui/badge";

const WishlistBadge = () => {
  const { wishlistCount } = useWishlist();
  return (
    <Badge className=" w-5 h-5 rounded-full bg-themeSecondary text-themeSecondary-foreground absolute -top-2 -right-3 text-sm text-center flex justify-center items-center">
      {wishlistCount}
    </Badge>
  );
};

export default WishlistBadge;
