"use client";
import QuantityInput from "@/components/QuantityInput";
import { useEffect, useState } from "react";
import CartItemPrice from "./CartItemPrice";
import useCart from "@/app/hooks/useCart";

const Subtotal = ({ book}) => {
  const {cartProducts,setCartProducts}=useCart()
  const [quantity, setQuantity] = useState(book?.quantity);
  useEffect(() => {
    const bookIndex = cartProducts.findIndex(
      (item) => item.productId === book.productId && item.format === book.format
    );
    if (bookIndex !== -1) {
      const updatedBooks = [...cartProducts];
      const updatedBook = { ...book, quantity };
      updatedBooks[bookIndex] = updatedBook;
      setCartProducts(updatedBooks);
    }
  }, [quantity]);

  return (
    <>
      <CartItemPrice
        quantity={quantity} 
        productPrice={book?.productId?.price}
      />
      {book?.format!=="ebook" && book?.format!=="audioBook" &&  <QuantityInput quantity={quantity} setQuantity={setQuantity} />} 
    </>
  );
};

export default Subtotal;
