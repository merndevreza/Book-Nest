import BookCard from "@/components/BookCard/BookCard";
import { getAllProductsShop } from "@/database/queries/products.queries";
import createSearchParamsObjectForProducts from "@/utils/createSearchParamsObjectForProducts";

const ShopProducts = async ({ searchParams, dictionary, lang }) => {
const response=await getAllProductsShop(createSearchParamsObjectForProducts(searchParams)) 
  if (response?.success === false) {
    return <p>Error Occurred: {response?.message}</p>;
  }
  const products = response?.data;
  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <BookCard
              key={product.id}
              book={product}
              dictionary={dictionary}
              lang={lang}
            />
          ))}
        </div>
      ) : (
        <p>No Products Found</p>
      )}
    </>
  );
};

export default ShopProducts;
