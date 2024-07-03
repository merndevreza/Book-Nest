import Link from "next/link";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import MainMenu from "./MainMenu";

const Navbar = () => {
  return (
    <nav className="bg-tertiary text-tertiary-foreground  hidden md:block">
      <div className="container flex justify-start items-center relative">
        <CategoriesMegaMenu toggleTitle={true} />
        <MainMenu mobile={false}/>
        <Link href="/login">Login</Link>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
