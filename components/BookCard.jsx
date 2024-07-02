
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import AddWishlistBtn from "./AddWishlistBtn"; 
import AvailableTypes from "./AvailableTypes";

const BookCard = ({ book }) => {
  return (
    <Card className="bg-secondary dark:bg-transparent flex flex-col items-center justify-between sm:h-full">
      <CardContent className="p-3">
        <div className="book-card">
          <div className="book-card-img-wrapper">
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
          <div className="pt-3 ">
            <div className="flex justify-between items-center">
              <p className=" inline-block px-3 py-1 bg-themeSecondary text-themeSecondary-foreground text-sm rounded-full font-semibold ">
                By: {book?.authorName}
              </p>
              <div>
                <AddWishlistBtn />
              </div>
            </div>
            <div className="w-full h-[2px] bg-gray-300 dark:bg-secondary  my-3"></div>
            <div className="text-center space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-themeSecondary dark:text-themePrimary">
                {book?.title}
              </h2>
              <div className="flex justify-center items-baseline mb-1 space-x-2">
                <p className="text-base sm:text-lg text-themePrimary dark:text-themeSecondary-foreground  font-semibold">
                  ${book?.discountedPrice || book?.regularPrice}
                </p>
                {book?.discountedPrice && (
                  <p className="text-sm text-gray-400 line-through">
                    ${book?.regularPrice}
                  </p>
                )}
              </div>
              <div className="flex justify-center gap-2">
                {book?.types.map((type) => (
                  <AvailableTypes type={type} key={type} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="py-3">
        <div>
          <Button variant="primary">Details</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
