import BreadCrumb from "@/components/BreadCrumb";
import CheckoutForm from "./_components/CheckoutForm";
import CheckoutSummary from "./_components/CheckoutSummary";

const paths = [
  {
    label: "Checkout",
    href: "/checkout",
  }, 
];
const CheckoutPage = () => {
  return (
    <main className="px-1 sm:px-16 lg:px-8  container section-padding ">
      <BreadCrumb paths={paths}/>
      <div className=" grid grid-cols-3 gap-8 xl:gap-16">
      <CheckoutForm className="col-span-2" />
      <CheckoutSummary />
      </div>
      
    </main>
  );
};

export default CheckoutPage;
