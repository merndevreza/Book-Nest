
import BookCard from "@/components/BookCard/BookCard";
import getBooks from "@/public/static-data/books";
const books=getBooks()
const ShopProducts = ({search,category,author,min,max,rating,sortBy,dictionary,lang}) => {
   return (
      <div className="col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          {books.map((book) => (
              <BookCard key={book.id} book={book} dictionary={dictionary} lang={lang}/>
            ))}
      </div>
   );
};

export default ShopProducts;