import CategoryListMenuDrawerMobile from "./CategoryListMenuDrawerMobile"; 
import CartIcon from "./CartIcon";
import HomeIcon from "./HomeIcon";
import { ThemeToggle } from "./ThemeToggle";
import UserIcon from "./UserIcon";

const MobileSecondaryHeader = () => {
  return (
    <div className="bg-secondary text-secondary-foreground fixed w-full left-0 bottom-0 z-50 block md:hidden">
      <div className="flex gap-2 justify-between items-center h-20 container">
        <HomeIcon showTitle={true} />
        <CartIcon className="flex-col h-full p-2" showTitle={true} />
        <CategoryListMenuDrawerMobile/>
        <UserIcon className="flex flex-col items-center" showTitle={true} />
        <ThemeToggle className=""/>
      </div>
    </div>
  );
};

export default MobileSecondaryHeader;
