import { Card, CardContent, CardFooter } from "../ui/card";
import AddWishlistBtn from "../AddWishlistBtn";
import AvailableTypes from "../AvailableTypes";
import Book3dForCard from "../Book3dForCard/Book3dForCard";
import Link from "next/link";

const BookCard = ({ book, dictionary, lang }) => {
  return (
    <Card className="bg-secondary dark:bg-transparent flex flex-col items-center justify-between sm:h-full">
      <CardContent className="p-3 w-full">
        <div className="book-card">
          <Book3dForCard
            thumbnail={book?.thumbnail}
            alt={book?.title}
            className="p-0"
          />
          <div className="pt-3 ">
            <div className="flex justify-center md:justify-between items-center">
              <p className=" inline-block px-3 py-1 bg-themeSecondary text-themeSecondary-foreground text-sm rounded-full font-semibold ">
                By: {book?.authorName}
              </p>
              <div className="hidden md:block">
                <AddWishlistBtn />
              </div>
            </div>
            <div className="w-full h-[2px] bg-gray-300 dark:bg-secondary  my-3"></div>
            <div className="text-center space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-themePrimary hover:text-themeSecondary">
                <Link href={`/${lang}/shop/01`}>{book?.title}</Link>
              </h2>
              <div className="flex justify-center items-baseline mb-1 space-x-2">
                <p className="text-base sm:text-lg text-themeSecondary dark:text-themeSecondary-foreground  font-semibold">
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
      <CardFooter className="px-2 py-3 flex justify-center items-center gap-2">
        <div>
          <Link
            href={`/${lang}/shop/01`}
            className="primary-btn self-start mx-auto sm:mx-0 h-9 rounded-md px-3"
          >
            {dictionary?.details}
          </Link> 
        </div>
        <div className="md:hidden ">
          <AddWishlistBtn />
        </div>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
