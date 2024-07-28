import BookCard from "@/components/BookCard/BookCard";
import { getLatestProducts } from "@/database/queries/products.queries";

const ShopProducts = async ({ searchParams, dictionary, lang }) => {

  const response = await getLatestProducts();
  if (response?.success === false) {
    return <p>Error Occurred: {response?.message}</p>;
  }
  const products = response?.data;
  return (
    <>
      {products.length > 0 ? (
        <div className="col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
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
