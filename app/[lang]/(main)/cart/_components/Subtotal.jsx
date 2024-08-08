"use client";
import QuantityInput from "@/components/QuantityInput";
import { useEffect, useState } from "react";
import CartItemPrice from "./CartItemPrice";

const Subtotal = ({ book, books, setBooks }) => {
  const [quantity, setQuantity] = useState(book?.quantity);
  useEffect(() => {
    const bookIndex = books.findIndex(
      (item) => item.productId === book.productId && item.format === book.format
    );
    if (bookIndex !== -1) {
      const updatedBooks = [...books];
      const updatedBook = { ...book, quantity };
      updatedBooks[bookIndex] = updatedBook;
      setBooks(updatedBooks);
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
