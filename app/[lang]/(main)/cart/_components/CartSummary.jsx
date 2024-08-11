"use client";
import Link from "next/link";
import CartItemPrice from "./CartItemPrice";
import CartTotalPrice from "./CartTotalPrice";
import { useEffect, useState } from "react";

const CartSummary = ({ books, dictionary, lang }) => {
  const [isAllDigitalBooks, setIsAllDigitalBooks] = useState(false);
  useEffect(() => {
    const checkFormat = books.every(
       (item) => item.format === "ebook" || item.format === "audioBook"
    );
    setIsAllDigitalBooks(checkFormat);
  }, [books]);

  return (
    <div className="col-span-5 lg:col-span-2">
      <section className=" border border-gray-200 p-4 rounded">
        <h4 className="text-themePrimary text-lg mb-4 font-medium uppercase">
          {dictionary?.orderSummary}
        </h4>
        <div className="space-y-2">
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book?.id} className="flex justify-between">
                <div>
                  <h5 className="text-themePrimary-foreground font-medium">
                    {book?.productId?.title}
                  </h5>
                  <p className="text-sm dark:text-gray-400 text-gray-700">
                    Format: {book?.format}
                  </p>
                </div>
                <p className="dark:text-gray-400 text-gray-700">
                  x{book?.quantity}
                </p>
                <CartItemPrice
                  quantity={book?.quantity}
                  productPrice={book?.productId?.price}
                />
              </div>
            ))
          ) : (
            <p>Empty</p>
          )}
        </div>

        <div className="flex justify-between  font-medium py-3 mt-3 uppercase border-t border-gray-200">
          <p className="font-semibold">Total</p>
          <CartTotalPrice books={books} />
        </div>

        <Link
          href={`/${lang}/checkout`}
          className="primary-btn h-11 rounded-md px-8 w-full"
        >
          {dictionary?.checkout}
        </Link>
      </section>
    </div>
  );
};

export default CartSummary;
