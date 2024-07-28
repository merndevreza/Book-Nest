const PriceRange = ({ price }) => {
  // Extract all price values into an array
  const prices = [
    price?.printedNewBook_regularPrice,
    price?.printedNewBook_discountedPrice,
    price?.printedOldBook_regularPrice,
    price?.printedOldBook_discountedPrice,
    price?.ebook_regularPrice,
    price?.ebook_discountedPrice,
    price?.audioBook_regularPrice,
    price?.audioBook_discountedPrice,
  ].filter((p) => p !== null); // Filter out null values

  // Calculate the minimum and maximum prices
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <div className="flex justify-center items-baseline mb-1 space-x-2">
      <p className="text-base sm:text-xl text-themePrimary dark:text-themeSecondary-foreground font-semibold">
        ${minPrice} - ${maxPrice}
      </p>
    </div>
  );
};

export default PriceRange;
