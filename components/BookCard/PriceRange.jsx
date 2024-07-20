const PriceRange = ({ price }) => {
  // Extract all price values into an array
  const prices = [
    price?.printedNewBook?.regularPrice,
    price?.printedNewBook?.discountedPrice,
    price?.printedOldBook?.regularPrice,
    price?.printedOldBook?.discountedPrice,
    price?.ebook?.regularPrice,
    price?.ebook?.discountedPrice,
    price?.audioBook?.regularPrice,
    price?.audioBook?.discountedPrice,
  ].filter((p) => p !== null); // Filter out null values

  // Calculate the minimum and maximum prices
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <div className="flex justify-center items-baseline mb-1 space-x-2">
      <p className="text-base sm:text-xl text-themePrimary dark:text-themeSecondary-foreground font-semibold">
        ${maxPrice} - ${minPrice}
      </p>
    </div>
  );
};

export default PriceRange;
