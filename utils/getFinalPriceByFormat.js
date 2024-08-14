export function getFinalPriceByFormat(price, format) {
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

  let discountedPrice;
  let regularPrice;
  if (format === "printedNewBook") {
    discountedPrice = printedNewBook_discountedPrice;
    regularPrice = printedNewBook_regularPrice;
  } else if (format === "printedOldBook") {
    discountedPrice = printedOldBook_discountedPrice;
    regularPrice = printedOldBook_regularPrice;
  } else if (format === "ebook") {
    discountedPrice = ebook_discountedPrice;
    regularPrice = ebook_regularPrice;
  } else if (format === "audioBook") {
    discountedPrice = audioBook_discountedPrice;
    regularPrice = audioBook_regularPrice;
  }

  return {
    discountedPrice,
    regularPrice,
  };
}
