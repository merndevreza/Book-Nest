import Link from "next/link";
import { Separator } from "./ui/separator";

const MenuLinks = ({ vertical, menu, footerMenu, lang }) => {
  return (
    <nav className="pl-0 pr-4 ">
      <ul className={`${vertical ? "flex flex-col gap-3" : "flex gap-5 px-5"}`}>
        {menu.map((item) => (
          <li key={item?.id}>
            <Link
              className="text-base font-semibold text-foreground hover:text-themeSecondary"
              href={`/${lang}${item?.pathname}`}
            >
              {item?.nameEn}
            </Link>
            {!footerMenu && <Separator className="block md:hidden" />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuLinks;
