import BookCardVertical from "@/components/BookCard/BookCardVertical";
import BreadCrumb from "@/components/BreadCrumb";
import book1Front from "@/public/assets/images/books/img-01.jpg";
import book1Back from "@/public/assets/images/books/img-02.jpg";
import book2Front from "@/public/assets/images/books/img-03.jpg";
import book2Back from "@/public/assets/images/books/img-04.jpg";
import { getDictionary } from "../../dictionary/dictionary";
const books = [
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    thumbnail: book1Front,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 4,
    types: ["printed", "pdf", "audio"],
  },
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    thumbnail: book2Front,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: null,
    rating: 4,
    types: ["printed", "audio"],
  },
  {
    id: crypto.randomUUID(),
    title: "ইংলিশে দুর্বলদের জন্য English Therapy",
    thumbnail: book1Back,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 3,
    types: ["printed", "pdf"],
  },
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    thumbnail: book2Back,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 4,
    types: ["pdf", "audio"],
  },
  {
    id: crypto.randomUUID(),
    title: "জার্মান ব্যাকরণ A1 থেকে B1 ( বাংলা ভার্সন )",
    thumbnail: book1Back,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 5,
    types: ["printed"],
  },
];

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
