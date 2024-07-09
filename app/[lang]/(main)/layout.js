import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop";
import MobileSecondaryHeader from "@/components/Header/MobileSecondaryHeader";
import Navbar from "@/components/Navbar/Navbar";
import { getDictionary } from "../dictionary/dictionary";

export default async function MainLayout({ children, params: { lang } }) {
  const dictionary=await getDictionary(lang)
  return (
    <>
      <HeaderTop  dictionary={dictionary}/>
      <Header lang={lang} dictionary={dictionary}/>
      <Navbar lang={lang} dictionary={dictionary}/>
      <MobileSecondaryHeader lang={lang}  dictionary={dictionary}/>
      {children}
      <Footer lang={lang}  dictionary={dictionary}/>
    </>
  );
}
