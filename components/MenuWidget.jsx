import Link from "next/link";
import { Separator } from "./ui/separator";

const MenuWidget = ({ menu, vertical, menuTitle }) => {
  return (
    <nav className="px-4 ">
      {menuTitle &&(<>
         <h4 className="text-md md:text-xl font-semibold mb-2">{menuTitle}</h4>
         <Separator className="bg-gray-300 dark:bg-slate-700 h-[2px] mb-4"/>
      </>)}

      <ul className={`${vertical ? "flex flex-col gap-3" : "flex gap-5 px-5"}`}>
        {menu.map((item) => (
          <li key={item?.id}>
            <Link
              className="text-md font-semibold hover:text-themePrimary"
              href={item?.pathname}
            >
              {item?.nameEn}
            </Link>
            <Separator className="block md:hidden" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuWidget;
