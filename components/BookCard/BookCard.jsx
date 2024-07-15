import { Card, CardContent, CardFooter } from "../ui/card";
import AvailableTypes from "../AvailableTypes"; 
import Link from "next/link";
import Ratings from "../Ratings";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Book3dView from "../Book3dView/Book3dView";

const BookCard = ({ book, dictionary, lang }) => {
  return (
    <Card className="bg-secondary dark:bg-transparent flex flex-col items-center justify-between sm:h-full">
      <CardContent className="p-3 w-full">
        <div className="book-card">
          <Book3dView bookImg={book?.thumbnail} bookAlt={book?.title} />
          <Image
            src={book?.thumbnail}
            alt={book?.title}
            className="p-0 block lg:hidden"
          />
          <div className="pt-3 ">
            <div className="flex justify-center md:justify-between items-center">
              <div className="flex gap-2">
                {book?.types.map((type) => (
                  <AvailableTypes type={type} key={type} />
                ))}
              </div>
              <div className="hidden md:block">
                <Ratings ratingNumber={5} />
              </div>
            </div>
            <div className="w-full h-[2px] bg-gray-300 dark:bg-secondary  my-3"></div>
            <div className="text-center space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-themeSecondary">
                <Link href={`/${lang}/shop/01`}>{book?.title}</Link>
              </h2>
              <p className=" inline-block px-3 py-1  bg-gray-300 dark:bg-secondary text-themeSecondary dark:text-themeSecondary-foreground  text-sm rounded-full font-semibold ">
                By: {book?.authorName}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-2 py-3 fle flex-col gap-2">
        <div className="flex justify-center items-baseline mb-1 space-x-2">
          <p className="text-base sm:text-xl text-themePrimary dark:text-themeSecondary-foreground  font-semibold">
            ${book?.discountedPrice || book?.regularPrice}
          </p>
          {book?.discountedPrice && (
            <p className="text-sm text-gray-400 line-through">
              ${book?.regularPrice}
            </p>
          )}
        </div>
        <div>
          <Link
            href={`/${lang}/shop/01`}
            className={cn(`primary-btn h-11 rounded-md px-20`)}
          >
            {dictionary?.details}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
