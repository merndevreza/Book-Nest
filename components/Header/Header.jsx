"use client";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import Search from "../Search";
import CartIcon from "./CartIcon";
import { MobileDrawer } from "./MobileDrawer";
import { ThemeToggle } from "./ThemeToggle";
import UserIcon from "./UserIcon";
import WishlistIcon from "./WishlistIcon";

const Header = ({session, dictionary,lang}) => {
  const [isSticky, setIsSticky] = useState(false);  

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true); 
    } else {
      setIsSticky(false);
    } 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`bg-secondary text-secondary-foreground sticky w-full left-0 top-0 z-50 ${isSticky && "shadow-lg"}`}>
      <div className="container py-5 md:py-3 grid grid-cols-5 items-center gap-3">
        <MobileDrawer className="lg:hidden block order-1" />
        <Logo lang={lang} className="order-2 md:order-1 col-span-3 lg:col-span-1 w-[120px] mx-auto lg:mx-0" logoTextClassName="text-center" />
        <Search lang={lang} dictionary={dictionary} className="order-4 lg:order-2 col-span-5 lg:col-span-3" />

        <div className="flex gap-4 justify-end order-3 col-span-1">
          <WishlistIcon session={session} lang={lang} />
          <CartIcon session={session} className="hidden md:block" lang={lang} />
          <UserIcon  session={session}  lang={lang} />
          <ThemeToggle className="hidden md:inline-flex  bg-tertiary hover:bg-tertiary text-tertiary-foreground min-w-10 min-h-10" />
        </div>
      </div>
    </div>
  );
};

export default Header;
