import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop";
import MobileSecondaryHeader from "@/components/Header/MobileSecondaryHeader";
import Navbar from "@/components/Navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <HeaderTop />
      <Header />
      <Navbar />
      <MobileSecondaryHeader />
      {children}
      <Footer />
    </>
  );
}
