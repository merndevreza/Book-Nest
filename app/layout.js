import { ThemeProvider } from "@/components/Header/ThemeProvider";
import { asul, sulphur } from "./fonts";
import "./globals.css";
import HeaderTop from "@/components/Header/HeaderTop";
import Header from "@/components/Header/Header"; 
import Navbar from "@/components/Navbar/Navbar";
import MobileSecondaryHeader from "@/components/Header/MobileSecondaryHeader";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Book Nest",
  description: "A Haven for Book Lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${asul.variable} ${sulphur.variable}`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderTop/>
          <Header/>
          <Navbar/>
          <MobileSecondaryHeader/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
