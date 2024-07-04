import Link from "next/link";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import MainMenu from "./MainMenu";

const Navbar = () => {
  return (
    <nav className="bg-tertiary dark:bg-gray-600 text-tertiary-foreground dark:text-foreground  hidden md:block">
      <div className="container flex justify-start items-center relative">
        <CategoriesMegaMenu toggleTitle={true} />
        <MainMenu mobile={false}/>
        <div className="ml-auto flex gap-2 items-center">
        <Link className="text-base font-semibold text-foreground hover:text-themeSecondary" href="/login">Login / Registration</Link> 
        <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
