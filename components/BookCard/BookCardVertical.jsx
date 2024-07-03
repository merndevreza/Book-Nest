import "./book-card.css";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import AvailableTypes from "../AvailableTypes";
import AddToCartBtn from "../AddToCartBtn";
import RemoveFromWishlistBtn from "../RemoveFromWishlistBtn";

const BookCardVertical = ({ book }) => {
  return (
    <Card className="bg-secondary dark:bg-transparent flex flex-col items-center justify-between sm:h-full">
      <CardContent className="p-3">
        <div className="book-card grid grid-cols-5 gap-5 items-center">
          <div className="col-span-2 sm:col-span-1 book-card-img-wrapper">
            <div className="book-card-img">
              <div className="book-card-img-front">
                <Image
                  className="img"
                  src={book?.thumbnail}
                  alt={book?.title}
                />
              </div>
              <div className="book-card-img-back">
                <Image
                  className="img"
                  src={book?.thumbnail}
                  alt={book?.title}
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 sm:col-span-4 flex flex-col lg:flex-row gap-3 justify-between items-start lg:items-center">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-themeSecondary dark:text-themePrimary">
                {book?.title}
              </h2>
              <p className="text-lg text-foreground font-bold ">
                By: {book?.authorName}
              </p>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-base sm:text-lg text-themePrimary dark:text-themeSecondary-foreground  font-semibold">
                  ${book?.discountedPrice || book?.regularPrice}
                </p>
                {book?.discountedPrice && (
                  <p className="text-sm text-gray-400 line-through">
                    ${book?.regularPrice}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                {book?.types.map((type) => (
                  <AvailableTypes type={type} key={type} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <AddToCartBtn />
              <RemoveFromWishlistBtn />
            </div> 
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCardVertical;
