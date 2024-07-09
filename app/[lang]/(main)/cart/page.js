import CartProductsTable from "./_components/CartProductsTable";
import CartSummary from "./_components/CartSummary";
import BreadCrumb from "@/components/BreadCrumb";
import { getDictionary } from "../../dictionary/dictionary"; 
import getBooks from "@/public/static-data/books";

const paths = [
  {
    label: "Cart",
    href: "cart",
  },
];
const books=getBooks()
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
