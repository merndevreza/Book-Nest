import RemoveFromWishlistBtn from "@/app/[lang]/(main)/wishlist/_components/RemoveFromWishlistBtn";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import AddToCartBtn from "../AddToCartWidget/AddToCartBtn";
import SinglePrice from "../SinglePrice";
import { camelCaseToCapitalized } from "@/utils/camelCaseToCapitalized";
import { checkProductInCart } from "@/app/actions/products.actions";

const BookCardVertical = async ({ book, userId, isLoggedIn }) => {
  const {
    printedNewBook_regularPrice,
    printedNewBook_discountedPrice,
    printedOldBook_regularPrice,
    printedOldBook_discountedPrice,
    ebook_regularPrice,
    ebook_discountedPrice,
    audioBook_regularPrice,
    audioBook_discountedPrice,
  } = book?.productId?.price;
  let discountedPrice;
  let regularPrice;
  if (book?.format === "printedNewBook") {
    discountedPrice = printedNewBook_discountedPrice;
    regularPrice = printedNewBook_regularPrice;
  } else if (book?.format === "printedOldBook") {
    discountedPrice = printedOldBook_discountedPrice;
    regularPrice = printedOldBook_regularPrice;
  } else if (book?.format === "ebook") {
    discountedPrice = ebook_discountedPrice;
    regularPrice = ebook_regularPrice;
  } else if (book?.format === "audioBook") {
    discountedPrice = audioBook_discountedPrice;
    regularPrice = audioBook_regularPrice;
  }

  let cartResponse; 

  if (
    isLoggedIn &&
    (book?.format === "ebook" || book?.format === "audioBook")
  ) {
    cartResponse = await checkProductInCart(
      userId,
      book?.productId?._id.toString(),
      book?.format
    );
  }

  return (
    <Card className="bg-secondary dark:bg-transparent flex flex-col items-center justify-between sm:h-full">
      <CardContent className="p-3">
        <div className="book-card grid grid-cols-5 gap-6 lg:gap-10 items-center">
          <Image
            src={book?.productId?.thumbnail}
            alt={book?.productId?.title}
            width={150}
            height={200}
          />
          <div className="col-span-3 sm:col-span-4 flex flex-col lg:flex-row gap-3 justify-between items-start lg:items-center">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-themeSecondary dark:text-themePrimary">
                {book?.productId?.title}
              </h2>
              <p className="text-lg text-foreground font-bold ">
                By: {book?.productId?.author.firstName}{" "}
                {book?.productId?.author.lastName}
              </p>
              <SinglePrice
                className="justify-start"
                discountedPrice={discountedPrice}
                regularPrice={regularPrice}
              />
              <p className="inline-block px-2 py-0 dark:bg-themeSecondary bg-tertiary text-black">
                Format: {camelCaseToCapitalized(book?.format)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <AddToCartBtn
                isFoundInCart={
                  cartResponse?.success ? cartResponse?.isFound : false
                }
                isLoggedIn={isLoggedIn}
                userId={userId}
                productId={book?.productId?._id.toString()}
                format={book?.format}
                quantity={1}
              />
              <RemoveFromWishlistBtn isLoggedIn={isLoggedIn}
                userId={userId}
                productId={book?.productId?._id.toString()}
                format={book?.format}/>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCardVertical;
