import BreadCrumb from "@/components/BreadCrumb";
import CheckoutForm from "./_components/CheckoutForm";
import CheckoutSummary from "./_components/CheckoutSummary";
import { getDictionary } from "../../dictionary/dictionary";

const paths = [
  {
    label: "Checkout",
    href: "checkout",
  }, 
];
const CheckoutPage = async({params:{lang}}) => {
  const dictionary =await getDictionary(lang)
  return (
    <main className="px-1 sm:px-16 lg:px-8  container section-padding ">
      <BreadCrumb lang={lang} paths={paths}/>
      <div className=" grid grid-cols-3 gap-8 xl:gap-16">
      <CheckoutForm className="col-span-2" dictionary={dictionary}/>
      <CheckoutSummary dictionary={dictionary}/>
      </div>
      
    </main>
  );
};

export default CheckoutPage;
