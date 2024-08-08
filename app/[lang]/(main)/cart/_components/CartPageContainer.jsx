"use client"

import { useState } from "react";
import CartProductsTable from "./CartProductsTable";
import CartSummary from "./CartSummary";

const CartPageContainer = ({products, userId,dictionary,lang}) => {
   const [books,setBooks]=useState(products)
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