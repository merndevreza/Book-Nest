import { useContext } from "react";
import { CartContext } from "../context-provider/contexts";

export default function useCart() {
  const { cartCount, setCartCount, cartProducts, setCartProducts } =
    useContext(CartContext);
    
  return { cartCount, setCartCount, cartProducts, setCartProducts };
}
