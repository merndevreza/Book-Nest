"use client";

import { useEffect, useState } from "react";
import { CartContext } from "../contexts";
const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    async function getCartCount() {
      console.log("Cart context");
    }
    getCartCount();
  }, []);
  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
