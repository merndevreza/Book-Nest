import Link from "next/link";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import MainMenu from "./MainMenu";

const Navbar = ({ categories, dictionary, lang }) => {
  return (
    <nav className="bg-tertiary dark:bg-gray-600 text-tertiary-foreground dark:text-foreground  hidden md:block min-h-12 ">
      <div className="container flex justify-start items-center relative">
      <CategoriesMegaMenu
              categories={categories}
              lang={lang}
              toggleTitle={true}
              dictionary={dictionary}
            />

        <div className=" hidden lg:block">
          <MainMenu lang={lang} mobile={false} />
        </div>
        <div className="ml-auto flex gap-2 items-center">
          <Link
            className="text-base font-semibold text-foreground hover:text-themeSecondary whitespace-nowrap"
            href={`/${lang}/login`}
          >
            {dictionary?.loginReg}
          </Link>
          <LanguageSwitcher dictionary={dictionary} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
