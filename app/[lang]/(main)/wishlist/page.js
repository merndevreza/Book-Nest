import BookCardVertical from "@/components/BookCard/BookCardVertical";
import BreadCrumb from "@/components/BreadCrumb";
import { getDictionary } from "../../dictionary/dictionary"; 
import getBooks from "@/public/static-data/books";
const books=getBooks()
const paths = [
  { href: "wishlist", label: "Wishlist" }
];
const WishlistPage = async({params:{lang}}) => {
  const dictionary=await getDictionary(lang)
  return (
    <main className="px-1 sm:px-4 lg:px-8 max-w-4xl container section-padding ">
      <BreadCrumb lang={lang} paths={paths} />
      <div className="space-y-3">
        {books.map((book) => (
          <BookCardVertical key={book.id} book={book} dictionary={dictionary} lang={lang}/>
        ))}
      </div>
    </main>
  );
};

export default WishlistPage;
