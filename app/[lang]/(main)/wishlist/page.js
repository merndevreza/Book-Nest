import BookCardVertical from "@/components/BookCard/BookCardVertical";
import BreadCrumb from "@/components/BreadCrumb";
import { getDictionary } from "../../dictionary/dictionary"; 
import { getWishlist } from "@/database/queries/products.queries";
import { auth } from "@/auth"; 
const paths = [{ href: "wishlist", label: "Wishlist" }];
const WishlistPage = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  const session = await auth();
  if (!session) {
    return null;
  }
  const response = await getWishlist(session?.user.id);
  let books;
  if (response.success) {
    books = response.data;
  } 

  return (
    <main className="px-1 sm:px-4 lg:px-8 max-w-4xl container section-padding ">
      <BreadCrumb lang={lang} paths={paths} />
      <div className="space-y-3">
        {books.map((book) => (
          <BookCardVertical
            key={book.id}
            isLoggedIn={session ? true : false}
            userId={session?.user.id}
            book={book} 
          />
        ))}
      </div>
    </main>
  );
};

export default WishlistPage;
