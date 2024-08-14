"use client";
import CartProductsTable from "./CartProductsTable";
import CartSummary from "./CartSummary";
import NoProductsFound from "@/components/NoProductsFound";
import BreadCrumb from "@/components/BreadCrumb";
import useCart from "@/app/hooks/useCart";

const CartPageContainer = ({ dictionary, lang, paths }) => {
  const { cartProducts } = useCart();
  return (
    <>
      {!cartProducts.length > 0 ? (
        <NoProductsFound
          title="Your cart is empty !"
          subtitle="Please visit our shop"
          lang={lang}
        />
      ) : (
        <>
          <BreadCrumb lang={lang} paths={paths} />
          <div className=" grid grid-cols-5 gap-8 xl:gap-16 ">
            <CartProductsTable dictionary={dictionary} lang={lang} />
            <CartSummary dictionary={dictionary} lang={lang} />
          </div>
        </>
      )}
    </>
  );
};

export default CartPageContainer;
