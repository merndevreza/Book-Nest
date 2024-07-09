import Link from "next/link";
import { Separator } from "./ui/separator";

const MenuWidget = ({ menu, vertical, menuTitle,footerMenu,lang }) => {
  return (
    <nav className="px-4 ">
      {menuTitle &&(<>
         <h4 className="text-base md:text-xl font-semibold mb-2">{menuTitle}</h4>
         <Separator className="bg-gray-300 dark:bg-slate-700 h-[2px] mb-4"/>
      </>)}

      <ul className={`${vertical ? "flex flex-col gap-3" : "flex gap-5 px-5"}`}>
        {menu.map((item) => (
          <li key={item?.id}>
            <Link
              className="text-base font-semibold text-foreground hover:text-themeSecondary"
              href={`/${lang}${item?.pathname}`}
            >
              {item?.nameEn}
            </Link>
            {!footerMenu &&(<Separator className="block md:hidden" />)} 
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuWidget;
