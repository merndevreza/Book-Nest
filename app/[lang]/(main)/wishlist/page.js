import { auth } from "@/auth";
import WishlistProductsList from "./_components/WishlistProductsList";
import ReqUserToLogin from "@/components/ReqUserToLogin";
const paths = [{ href: "wishlist", label: "Wishlist" }];
const WishlistPage = async ({ params: { lang } }) => {
  const session = await auth();
  return (
    <main className="px-1 sm:px-4 lg:px-8 max-w-4xl container section-padding ">
      {!session && <ReqUserToLogin lang={lang} />}
      {session && (
        <>
          <WishlistProductsList session={session} paths={paths} lang={lang}/>
        </>
      )}
    </main>
  );
};

export default WishlistPage;
