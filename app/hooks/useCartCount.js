import { useContext } from "react";
import { CartContext } from "../context-provider/contexts";

export default function useCartCount() {
  const { cartCount, setCartCount } = useContext(CartContext);
  return { cartCount, setCartCount };
}
