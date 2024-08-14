import { useContext } from "react";
import { WishlistContext } from "../context-provider/contexts";

export default function useWishlist() {
  const {
    wishlistCount,
    setWishlistCount,
    wishlistProducts,
    setWishlistProducts,
  } = useContext(WishlistContext);

  return {
    wishlistCount,
    setWishlistCount,
    wishlistProducts,
    setWishlistProducts,
  };
}
