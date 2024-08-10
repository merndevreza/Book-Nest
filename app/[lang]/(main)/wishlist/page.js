import BreadCrumb from "@/components/BreadCrumb";
import { getWishlist } from "@/database/queries/products.queries";
import { auth } from "@/auth";
import WishlistProductsList from "./_components/WishlistProductsList";
import ReqUserToLogin from "@/components/ReqUserToLogin";
const paths = [{ href: "wishlist", label: "Wishlist" }];

const WishlistPage = async ({ params: { lang } }) => {
  const session = await auth();
  let products;
  if (session) {
    const response = await getWishlist(session?.user.id);
    if (response.success) {
      products = response.data;
    }
  }

  return (
    <main className="px-1 sm:px-4 lg:px-8 max-w-4xl container section-padding ">
      {!session && <ReqUserToLogin lang={lang} />}
      {session && (
        <>
          <BreadCrumb lang={lang} paths={paths} />
          <WishlistProductsList products={products} session={session} />
        </>
      )}
    </main>
  );
};

export default WishlistPage;
