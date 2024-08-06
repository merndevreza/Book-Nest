"use client";
import RemoveFromWishlistBtn from "@/app/[lang]/(main)/wishlist/_components/RemoveFromWishlistBtn";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import AddToCartBtn from "../AddToCartWidget/AddToCartBtn";
import { camelCaseToCapitalized } from "@/utils/camelCaseToCapitalized";
import { checkProductInCart } from "@/app/actions/products.actions";
import Price from "./Price";
import { useEffect, useState } from "react";

const BookCardVertical = ({ book, userId, isLoggedIn, setBooks }) => {
  const [found, setFound] = useState(false);

  useEffect(() => {
    async function getIsInCart() {
      if (
        isLoggedIn &&
        (book?.format === "ebook" || book?.format === "audioBook")
      ) {
        const cartResponse = await checkProductInCart(
          userId,
          book?.productId?.id,
          book?.format
        );
        if (cartResponse?.success) {
          setFound(cartResponse?.isFound);
        } else {
          setFound(false);
        }
      }
    }
    getIsInCart();
  }, []);

  return (
    <Card className="bg-secondary dark:bg-transparent flex flex-col items-center justify-between sm:h-full">
      <CardContent className="p-3">
        <div className="book-card grid grid-cols-5 gap-6 lg:gap-10 items-center">
          <Image
            src={book?.productId?.thumbnail}
            alt={book?.productId?.title}
            width={150}
            height={200}
          />
          <div className="col-span-3 sm:col-span-4 flex flex-col lg:flex-row gap-3 justify-between items-start lg:items-center">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-themeSecondary dark:text-themePrimary">
                {book?.productId?.title}
              </h2>
              <p className="text-lg text-foreground font-bold ">
                By: {book?.productId?.author.firstName}{" "}
                {book?.productId?.author.lastName}
              </p>
              <Price
                format={book?.format}
                productPrice={book?.productId?.price}
              />
              <p className="inline-block px-2 py-0 dark:bg-themeSecondary bg-tertiary text-black">
                Format: {camelCaseToCapitalized(book?.format)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <AddToCartBtn
                isFoundInCart={found}
                isLoggedIn={isLoggedIn}
                userId={userId}
                productId={book?.productId?.id}
                format={book?.format}
                quantity={1}
              />
              <RemoveFromWishlistBtn
              itemId={book?.id}
                setBooks={setBooks}
                isLoggedIn={isLoggedIn}
                userId={userId}
                productId={book?.productId?.id}
                format={book?.format}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCardVertical;
