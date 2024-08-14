"use client";
import useWishlist from "@/app/hooks/useWishlist";
import BookCardVertical from "@/components/BookCard/BookCardVertical";
import BreadCrumb from "@/components/BreadCrumb";
import NoProductsFound from "@/components/NoProductsFound";

const WishlistProductsList = ({ session, lang, paths }) => {
  const { wishlistProducts } = useWishlist(); 

  return ( 
    <>
      {!wishlistProducts.length > 0 ? (
        <NoProductsFound
          title="Your wishlist is empty !"
          subtitle="Please visit our shop"
          lang={lang}
        />
      ) : (
        <>
          <BreadCrumb lang={lang} paths={paths} />
          <div className="space-y-3">
            {wishlistProducts.map((book) => (
              <BookCardVertical
                key={book.id}
                isLoggedIn={session ? true : false}
                userId={session?.user.id}
                book={book}
                lang={lang}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default WishlistProductsList;
