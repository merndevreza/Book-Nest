
import { Button } from "../ui/button";
import { Card, CardContent} from "../ui/card";
import AvailableTypes from "../AvailableTypes"; 
import RemoveFromWishlistBtn from "../../app/(main)/wishlist/_components/RemoveFromWishlistBtn"; 
import Book3dForCard from "../Book3dForCard/Book3dForCard";

const BookCardVertical = ({ book }) => {
  return (
    <Card className="bg-secondary dark:bg-transparent flex flex-col items-center justify-between sm:h-full">
      <CardContent className="p-3">
        <div className="book-card grid grid-cols-5 gap-6 lg:gap-10 items-center">
          <Book3dForCard thumbnail={book?.thumbnail} alt={book?.title} className="col-span-2 sm:col-span-1 p-0"/> 
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
            <Button variant="themePrimary">Details</Button>
              <RemoveFromWishlistBtn />
            </div> 
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCardVertical;
