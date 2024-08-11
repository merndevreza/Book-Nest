"use client";

import { useEffect, useState } from "react";
import CartProductsTable from "./CartProductsTable";
import CartSummary from "./CartSummary";
import { getCartProductsList } from "@/database/queries/products.queries";

const CartPageContainer = ({ userId, dictionary, lang }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getUserCartProducts() {
      if (userId) {
        const response = await getCartProductsList(userId);
        if (response.success) {
          setBooks(response.data);
        }
      }
    }
    getUserCartProducts();
  }, [userId]);
  return (
    <div className=" grid grid-cols-5 gap-8 xl:gap-16 ">
      <CartProductsTable
        userId={userId}
        books={books}
        setBooks={setBooks}
        dictionary={dictionary}
        lang={lang}
      />
      <CartSummary books={books} dictionary={dictionary} lang={lang} />
    </div>
  );
};

export default CartPageContainer;
