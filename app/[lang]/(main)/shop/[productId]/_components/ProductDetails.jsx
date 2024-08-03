import { Progress } from "@/components/ui/progress";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductDetailsTabs from "./ProductDetailsTabs";
import calculateInPercentage from "@/utils/calculateInPercentage";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Ratings from "@/components/Ratings";
const ProductDetails = ({ book, dictionary }) => {
  const {
    title,
    stock,
    author,
    shortDescription,
    category,
    reviewsCount,
    averageRating,
    price,
  } = book;

  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader className="p-0 space-y-6 mb-6">
        <div className="grid grid-cols-5 justify-between items-start gap-4">
          <CardTitle className="dark:text-white col-span-5 xl:col-span-4 leading-normal text-lg md:text-xl lg:text-2xl">
            {title}
          </CardTitle>
          <div className="flex items-center gap-2 min-w-36">
            <Ratings ratingNumber={averageRating} />
            <span className="inline-block">({reviewsCount})</span>
          </div>
        </div>
        <div>
          <h2>
            <span className="mr-2 inline-block font-semibold">
              {" "}
              {dictionary?.author}:
            </span>{" "}
            <span>{`${author.firstName} ${author.lastName}`}</span>
          </h2>
          <p>
            <span className="mr-2 inline-block font-semibold">
              {" "}
              {dictionary?.category}:
            </span>{" "}
            <span>{category?.name}</span>
          </p>
          <p>
            <span className="mr-2 inline-block font-semibold"> Summary:</span>{" "}
            <span>{shortDescription}</span>
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 p-0">
        <div className="border rounded-lg bg-white dark:bg-[#030712] p-4 ">
          <h3>Stocks:</h3>
          <Separator className="h-[2px] mt-1 mb-3" />
          {price?.printedNewBook_regularPrice && (
            <div className="grid grid-cols-5 items-center gap-2">
              <p className="md:whitespace-nowrap col-span-1">Printed new: </p>
              <div className="col-span-3">
                <Progress
                  value={calculateInPercentage(
                    stock?.printedNewBook_stock,
                    100
                  )}
                  className="h-2"
                />
              </div>
              <div className="col-span-1">
                <Badge variant="outline">{stock?.printedNewBook_stock}</Badge>
              </div>
            </div>
          )}
          {price?.printedOldBook_regularPrice && (
            <div className="grid grid-cols-5 items-center gap-2">
              <p className="md:whitespace-nowrap col-span-1">Printed old: </p>
              <div className="col-span-3">
                <Progress
                  value={calculateInPercentage(
                    stock?.printedOldBook_stock,
                    100
                  )}
                  className="h-2"
                />
              </div>
              <div className="col-span-1">
                <Badge variant="outline">{stock?.printedOldBook_stock}</Badge>
              </div>
            </div>
          )}
        </div>
        <ProductDetailsTabs book={book} dictionary={dictionary} />
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
