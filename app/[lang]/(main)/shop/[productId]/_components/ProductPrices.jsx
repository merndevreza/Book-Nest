import AddToCartWidget from "@/components/AddToCartWidget/AddToCartWidget";

const ProductPrices = ({ dictionary, book }) => {
  const {
    printedNewBook_regularPrice,
    printedNewBook_discountedPrice,
    printedOldBook_regularPrice,
    printedOldBook_discountedPrice,
    ebook_regularPrice,
    ebook_discountedPrice,
    audioBook_regularPrice,
    audioBook_discountedPrice,
  } = book?.price;
  //
  return (
    <>
      {printedNewBook_regularPrice && (
        <AddToCartWidget
          book={book}
          regularPrice={printedNewBook_regularPrice}
          discountedPrice={printedNewBook_discountedPrice}
          format="printedNewBook"
          title={dictionary?.printedNewBook}
        />
      )}
      {printedOldBook_regularPrice && (
        <AddToCartWidget
          book={book}
          format="printedOldBook"
          regularPrice={printedOldBook_regularPrice}
          discountedPrice={printedOldBook_discountedPrice}
          title={dictionary?.printedOldBook}
        />
      )}
      {ebook_regularPrice && (
        <AddToCartWidget
          book={book}
          format="ebook"
          regularPrice={ebook_regularPrice}
          discountedPrice={ebook_discountedPrice}
          title={dictionary?.eBook}
        />
      )}
      {audioBook_regularPrice && (
        <AddToCartWidget
          book={book}
          format="audioBook"
          regularPrice={audioBook_regularPrice}
          discountedPrice={audioBook_discountedPrice}
          title={dictionary?.audioBook}
        />
      )}
    </>
  );
};

export default ProductPrices;
