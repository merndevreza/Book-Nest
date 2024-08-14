import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop";
import MobileSecondaryHeader from "@/components/Header/MobileSecondaryHeader";
import Navbar from "@/components/Navbar/Navbar";
import { getDictionary } from "../dictionary/dictionary";
import { getAllCategories } from "@/database/queries/categories.queries";
import { auth } from "@/auth";
import CartProvider from "@/app/context-provider/providers/CartProvider";
import WishlistProvider from "@/app/context-provider/providers/WIshlistProvider";

export default async function MainLayout({ children, params: { lang } }) {
  const dictionary = await getDictionary(lang);
  const categoriesResponse = await getAllCategories();
  const session = await auth();

  return (
    <>
      <HeaderTop dictionary={dictionary} />
      <WishlistProvider>
        <CartProvider>
          <Header session={session} lang={lang} dictionary={dictionary} />
          <Navbar
            session={session}
            categories={categoriesResponse?.data}
            lang={lang}
            dictionary={dictionary}
          />
          <MobileSecondaryHeader
            categories={categoriesResponse?.data}
            lang={lang}
            session={session}
            dictionary={dictionary}
          />
          {children}
        </CartProvider>
      </WishlistProvider>
      <Footer lang={lang} dictionary={dictionary} />
    </>
  );
}
