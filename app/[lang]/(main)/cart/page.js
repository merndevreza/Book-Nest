import book1Front from "@/public/assets/images/books/img-01.jpg";
import book1Back from "@/public/assets/images/books/img-02.jpg";
import book2Front from "@/public/assets/images/books/img-03.jpg";
import book2Back from "@/public/assets/images/books/img-04.jpg";
import CartProductsTable from "./_components/CartProductsTable";
import CartSummary from "./_components/CartSummary";
import BreadCrumb from "@/components/BreadCrumb";
import { getDictionary } from "../../dictionary/dictionary";
const books = [
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    stock: 2,
    thumbnail: book1Front,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 4,
    types: ["printed"],
  },
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    stock: 0,
    thumbnail: book2Front,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: null,
    rating: 4,
    types: ["audio"],
  },
  {
    id: crypto.randomUUID(),
    title: "ইংলিশে দুর্বলদের জন্য English Therapy",
    thumbnail: book1Back,
    category: "Drama",
    stock: 22,
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 3,
    types: ["pdf"],
  },
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    stock: 12,
    thumbnail: book2Back,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 4,
    types: ["audio"],
  },
  {
    id: crypto.randomUUID(),
    title: "জার্মান ব্যাকরণ A1 থেকে B1 ( বাংলা ভার্সন )",
    thumbnail: book1Back,
    stock: 0,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 5,
    types: ["printed"],
  },
];

const paths = [
  {
    label: "Cart",
    href: "cart",
  },
];
const CartPage = async({params:{lang}}) => {
  const dictionary=await getDictionary(lang)
  return (
    <main className="px-1 sm:px-16 lg:px-8  container section-padding">
      <BreadCrumb lang={lang} paths={paths} />

      <div className=" grid grid-cols-5 gap-8 xl:gap-16 ">
        <CartProductsTable className="col-span-5 lg:col-span-3" books={books} dictionary={dictionary} lang={lang}/>
        <CartSummary books={books} dictionary={dictionary} lang={lang} />
      </div>
    </main>
  );
};

export default CartPage;
