"use client";

import { useEffect, useState } from "react";
import { CartContext } from "../contexts";
import useAuth from "@/app/hooks/useAuth";
import {
  getCartProductsCount,
  getCartProductsList,
} from "@/database/queries/products.queries";
const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const { user } = useAuth();

  //total quantity
  useEffect(() => {
    async function getCartCount() {
      if (user) {
        const response = await getCartProductsCount(user.id);
        if (response.success) {
          setCartCount(response.data);
        }
      }
    }
    getCartCount();
  }, [user]);

  //Products
  useEffect(() => {
    async function getUserCartProducts() {
      if (user) {
        const response = await getCartProductsList(user.id);
        if (response.success) {
          setCartProducts(response.data);
        }
      }
    }
    getUserCartProducts();
  }, [user]);
  
  return (
    <CartContext.Provider
      value={{ cartCount, setCartCount, cartProducts, setCartProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
