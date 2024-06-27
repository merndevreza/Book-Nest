"use client";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import Search from "../Search";
import CartIcon from "./CartIcon";
import { MobileDrawer } from "./MobileDrawer";
import { ThemeToggle } from "./ThemeToggle";
import UserIcon from "./UserIcon";
import WishlistIcon from "./WishlistIcon";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true); 
    } else {
      setIsSticky(false);
    }

    if (window.screen.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
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
        <MobileDrawer className="md:hidden block order-1" />
        <Logo className="order-2 md:order-1 col-span-3 md:col-span-1" />
        <Search className="order-4 md:order-2 col-span-5 md:col-span-3" />

        <div className="flex gap-2 justify-end order-3 col-span-1">
          <WishlistIcon />
          <CartIcon className="hidden md:block" />
          <UserIcon className="hidden md:block" />
          <ThemeToggle className="hidden md:inline-flex" />
        </div>
      </div>
    </div>
  );
};

export default Header;
