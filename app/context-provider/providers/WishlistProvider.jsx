"use client";
import { useEffect, useState } from "react";
import { WishlistContext } from "../contexts";
import useAuth from "@/app/hooks/useAuth";
import {
  getWishlist,
  getWishlistCount,
} from "@/database/queries/products.queries";

const WishlistProvider = ({ children }) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const { user } = useAuth();
  
  //Products
  useEffect(() => {
    async function getProducts() {
      if (user) {
        const response = await getWishlist(user.id);
        if (response.success) {
          setWishlistCount(response.data.length);
          setWishlistProducts(response.data);
        }
      }
    }
    getProducts();
  }, [user]);
  return (
    <WishlistContext.Provider
      value={{
        wishlistCount,
        setWishlistCount,
        wishlistProducts,
        setWishlistProducts,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
