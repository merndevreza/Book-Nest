import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const EbookCard = ({book,dictionary}) => {
  return (
    <Card>
      <CardContent className="grid grid-cols-5 gap-4 items-center justify-center p-3">
        <div className="col-span-2">
          <Image
            className="rounded translate-y-0 hover:-translate-y-1 transition duration-300 ease-in w-full max-w-40"
            src={book?.thumbnail}
            alt={book?.title}
          />
        </div>
        <div className="col-span-3 space-y-2">
          <h3 className="text-xl font-semibold text-themePrimary">
            {book?.title}
          </h3>
          <p>By: {book?.authorName}</p>
          <p>Category: {book?.category}</p>
          <div className="flex flex-col md:flex-row lg:flex-col  xl:flex-row gap-2">
          <Button variant="themePrimary" size="sm">{dictionary?.download}</Button>
          <Button variant="themePrimary" size="sm">{dictionary?.readNow}</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EbookCard;
