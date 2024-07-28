import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop";
import MobileSecondaryHeader from "@/components/Header/MobileSecondaryHeader";
import Navbar from "@/components/Navbar/Navbar";
import { getDictionary } from "../dictionary/dictionary"; 
import { getAllCategories } from "@/database/queries/categories.queries";

export default async function MainLayout({ children, params: { lang } }) {
  const dictionary=await getDictionary(lang)
  const categoriesResponse = await getAllCategories();
  return (
    <>
      <HeaderTop dictionary={dictionary}/>
      <Header lang={lang} dictionary={dictionary}/>
      <Navbar categories={categoriesResponse?.data} lang={lang} dictionary={dictionary}/>
      <MobileSecondaryHeader categories={categoriesResponse?.data} lang={lang}  dictionary={dictionary}/>
      {children}
      <Footer lang={lang}  dictionary={dictionary}/>
    </>
  );
}
