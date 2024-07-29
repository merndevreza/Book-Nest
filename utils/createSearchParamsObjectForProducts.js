const createSearchParamsObjectForProducts = (searchParams) => {
  const { search, format, category, author, rating, min, max } = searchParams;
  const formats = decodeURI(format).split("|");
  const categories = decodeURI(category).split("|");
  const authors = decodeURI(author).split("|");
  const ratings = decodeURI(rating).split("|"); 
  return {
    search,
    formats,
    categories,
    authors,
    ratings,
    min,
    max,
  };
};
export default createSearchParamsObjectForProducts;
