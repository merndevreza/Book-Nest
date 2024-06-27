import Link from "next/link";
import { Separator } from "../ui/separator";

const menu = [
  {
    id: 1,
    nameBn: "জেনারেল",
    nameEn: "Generale",
    pathname: "/category/generale",
  },
  {
    id: 2,
    nameBn: "একাডেমি",
    nameEn: "Academy",
    pathname: "/category/academy",
  },
  {
    id: 3,
    nameBn: "মেডিকেল",
    nameEn: "Medical",
    pathname: "/category/medical",
  },
  {
    id: 4,
    nameBn: "পুরাতন বই",
    nameEn: "Old Books",
    pathname: "/category/old-books",
  },
];

const MainMenu = ({vertical}) => {
  return (
    <nav>
      <ul className={`${vertical?"flex flex-col gap-5":"flex gap-5 px-5"}`}>
        {menu.map((item) => (
          <li key={item?.id}>
            <Link className="text-md font-semibold hover:text-themeSecondary" href={item?.pathname}>{item?.nameEn}</Link>
            <Separator className="block md:hidden" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
