import BreadCrumb from "@/components/BreadCrumb";
import { getWishlist } from "@/database/queries/products.queries";
import { auth } from "@/auth";
import WishlistProductsList from "./_components/WishlistProductsList";
import { replaceMongoIdInObject } from "@/utils/replaceMongoID";
const paths = [{ href: "wishlist", label: "Wishlist" }];

const WishlistPage = async ({ params: { lang } }) => {
  const session = await auth();
  if (!session) {
    return null;
  }
  const response = await getWishlist(session?.user.id);

  let products;
  if (response.success) {
    products = response.data.map((item) => {
      const product = replaceMongoIdInObject(item.productId);
      return {
        ...item,
        productId: product,
      };
    });
  }

  return (
    <main className="px-1 sm:px-4 lg:px-8 max-w-4xl container section-padding ">
      <BreadCrumb lang={lang} paths={paths} />
      <WishlistProductsList products={products} session={session} />
    </main>
  );
};

export default WishlistPage;
