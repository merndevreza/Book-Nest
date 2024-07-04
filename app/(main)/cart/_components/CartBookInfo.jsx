
import Book3dForCard from "@/components/Book3dForCard/Book3dForCard";
import { Card, CardContent } from "@/components/ui/card";

const CartBookInfo = ({ book }) => {
  return (
    <Card className=" bg-transparent flex flex-col items-center justify-between sm:h-full border-none shadow-none">
      <CardContent className="p-3">
        <div className="book-card grid grid-cols-5 gap-5 items-center">
          <div className="col-span-5 sm:col-span-2 xl:col-span-1">
            <Book3dForCard thumbnail={book?.thumbnail} alt={book?.title} /> 
          </div>
          <div className="col-span-5 sm:col-span-3 xl:col-span-4 flex flex-col lg:flex-row gap-3 justify-between items-start lg:items-center">
            <div className="space-y-2">
              <div>
                <h2 className="text-lg font-bold text-themePrimary ">
                  {book?.title}
                </h2>
                <p className="text-base text-gray-600 font-bold dark:text-foreground">
                  By: {book?.authorName}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold ">
                  Availability:{" "}
                  {book?.stock > 0 ? (
                    <span className="text-themeSecondary">
                      In Stock ({book?.stock})
                    </span>
                  ) : (
                    <span className="text-destructive">Stock Out</span>
                  )}
                </p>
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
