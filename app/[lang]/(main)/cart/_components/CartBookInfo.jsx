import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const CartBookInfo = ({ book, lang }) => {
  let stock;
  let isDigitalFormat;
  if (book?.format !== "ebook" && book?.format !== "audioBook") {
    isDigitalFormat = false;
    if (
      book?.format === "printedOldBook" &&
      book?.productId?.stock.printedOldBook_stock > 0
    ) {
      stock = book?.productId?.stock.printedOldBook_stock;
    } else if (
      book?.format === "printedNewBook" &&
      book?.productId?.stock.printedNewBook_stock > 0
    ) {
      stock = book?.productId?.stock.printedNewBook_stock;
    } else {
      stock = null;
    }
  } else {
    isDigitalFormat = true;
  }
  return (
    <Card className=" bg-transparent flex flex-col items-center justify-between sm:h-full border-none shadow-none">
      <CardContent className="p-3">
        <div className="book-card grid grid-cols-5 gap-5 items-center">
          <div className="col-span-5 sm:col-span-2 xl:col-span-1">
            <Link href={`/${lang}/shop/${book?.productId?.id}`}>
              <Image
                src={book?.productId?.thumbnail}
                alt={book?.productId?.title}
                width={150}
                height={200}
              />
            </Link>
          </div>
          <div className="col-span-5 sm:col-span-3 xl:col-span-4 flex flex-col lg:flex-row gap-3 justify-between items-start lg:items-center">
            <div className="space-y-2">
              <div>
                <h2 className="text-lg font-bold text-themePrimary ">
                  <Link href={`/${lang}/shop/${book?.productId?.id}`}>
                    {book?.productId?.title}
                  </Link>
                </h2>
                <p className="text-base text-gray-600 font-bold dark:text-foreground">
                  By: {book?.productId?.author.firstName}{" "}
                  {book?.productId?.author.lastName}
                </p>
              </div>
              <div>
                {!isDigitalFormat &&
                  stock &&
                  (stock > 0 ? (
                    <span className="text-themeSecondary">
                      In Stock: {book?.productId?.stock.printedNewBook_stock}
                    </span>
                  ) : (
                    <span className="text-destructive">Stock Out</span>
                  ))}
                <p className="text-sm text-gray-500  font-bold ">
                  Expired In: <span className="text-destructive">10:05</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartBookInfo;
