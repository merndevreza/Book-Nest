import AddToCartWidget from "./AddToCartWidget";

const ProductPrices = ({ price,id,dictionary }) => {
  const {
    printedNewBook_regularPrice,
    printedNewBook_discountedPrice,
    printedOldBook_regularPrice,
    printedOldBook_discountedPrice,
    ebook_regularPrice,
    ebook_discountedPrice,
    audioBook_regularPrice,
    audioBook_discountedPrice,
  } = price;
  return (
    <>
      {printedNewBook_regularPrice && (
        <AddToCartWidget
          productId={id}
          regularPrice={printedNewBook_regularPrice}
          discountedPrice={printedNewBook_discountedPrice}
          format="printedNewBook"
          title={dictionary?.printedNewBook}
        />
      )}
      { printedOldBook_regularPrice && (
        <AddToCartWidget
          productId={id}
          format="printedOldBook"
          regularPrice={printedOldBook_regularPrice}
          discountedPrice={printedOldBook_discountedPrice}
          title={dictionary?.printedOldBook}
        />
      )}
      {ebook_regularPrice && (
        <AddToCartWidget
          productId={id}
          format="ebook"
          regularPrice={ebook_regularPrice}
          discountedPrice={ebook_discountedPrice}
          title={dictionary?.eBook}
        />
      )}
      {audioBook_regularPrice && (
        <AddToCartWidget
          productId={id}
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
