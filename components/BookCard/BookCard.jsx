import { Card, CardContent, CardFooter } from "../ui/card";
import AvailableTypes from "../AvailableTypes";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Book3dView from "../Book3dView/Book3dView";
import PriceRange from "./PriceRange";
import Ratings from "../Ratings";

const BookCard = async ({ book, dictionary, lang }) => {
  return (
    <Card className="bg-transparent flex flex-col items-center justify-between sm:h-full">
      <CardContent className="p-3 w-full">
        <div className="book-card">
          <div className="hidden lg:block">
            <Book3dView bookImg={book?.thumbnail} bookAlt={book?.title} />
          </div>
          <Image
            src={book?.thumbnail}
            width={200}
            height={300}
            alt={book?.title}
            className="p-0 block lg:hidden mx-auto"
          />
          <div className="pt-3 md:pt-8">
            <div className="flex justify-center md:justify-between items-center">
              <div className="flex gap-2">
                {(book?.price?.printedNewBook_regularPrice ||
                  book?.price?.printedOldBook_regularPrice) && (
                  <AvailableTypes type="printedBook" />
                )}
                {book?.price?.ebook_regularPrice && (
                  <AvailableTypes type="ebook" />
                )}

                {book?.price?.audioBook_regularPrice && (
                  <AvailableTypes type="audioBook" />
                )}
              </div>
              <div className="hidden md:block">
                <Ratings ratingNumber={book?.averageRating} />
              </div>
            </div>
            <div className="w-full h-[2px] bg-gray-300 dark:bg-secondary  my-3"></div>
            <div className="text-center space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-themePrimary">
                <Link href={`/${lang}/shop/${book?.id}`}>{book?.title}</Link>
              </h2>
              <p className=" inline-block px-3 py-1  bg-tertiary dark:bg-secondary text-gray-700 dark:text-themeSecondary-foreground  text-sm rounded-full font-semibold ">
                By: {`${book?.author?.firstName} ${book?.author?.lastName}`}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-2 py-3 fle flex-col gap-2">
        <PriceRange price={book?.price} />
        <div>
          <Link
            href={`/${lang}/shop/${book?.id}`}
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
