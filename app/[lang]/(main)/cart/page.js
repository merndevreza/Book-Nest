import { getDictionary } from "../../dictionary/dictionary";
import { auth } from "@/auth";
import CartPageContainer from "./_components/CartPageContainer";
import ReqUserToLogin from "@/components/ReqUserToLogin";

const paths = [
  {
    label: "Cart",
    href: "cart",
  },
];
const CartPage = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  const session = await auth();
  return (
    <main className="px-1 sm:px-16 lg:px-8  container section-padding">
      {!session && <ReqUserToLogin lang={lang} />}
      {session && (
        <>
          <CartPageContainer
            paths={paths} 
            dictionary={dictionary}
            lang={lang}
          />
        </>
      )}
    </main>
  );
};

export default CartPage;
