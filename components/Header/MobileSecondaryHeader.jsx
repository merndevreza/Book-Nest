import CategoryListMenuDrawerMobile from "./CategoryListMenuDrawerMobile"; 
import CartIcon from "./CartIcon";
import HomeIcon from "./HomeIcon";
import { ThemeToggle } from "./ThemeToggle"; 
import UserIconMobile from "./UserIconMobile";

const MobileSecondaryHeader = ({categories,dictionary,lang}) => {
  return (
    <div className="bg-secondary text-secondary-foreground fixed w-full left-0 bottom-0 z-50 block md:hidden">
      <div className="flex gap-2 justify-between items-center h-20 px-2">
        <HomeIcon showTitle={true} />
        <CartIcon className="flex flex-col justify-center items-center h-full p-2  text-sm" showTitle={true} />
        <CategoryListMenuDrawerMobile categories={categories} dictionary={dictionary} lang={lang}/>
        <UserIconMobile lang={lang}/>
        <ThemeToggle/>
      </div>
    </div>
  );
};

export default MobileSecondaryHeader;
