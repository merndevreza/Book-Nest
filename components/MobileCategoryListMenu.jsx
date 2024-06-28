"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const allCategories = [
  {
    id: 1,
    name: "Magazine",
  },
  {
    id: 2,
    name: "Science",
  },
  {
    id: 3,
    name: "Arts",
  },
  {
    id: 4,
    name: "Magazine",
  },
  {
    id: 5,
    name: "Science",
  },
  {
    id: 6,
    name: "Arts",
  },
];
const MobileCategoryListMenu = ({ className, toggleTitle }) => {
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);
  const handleClick = () => {
    setIsShow(!isShow);
    console.log("clicked");
  };
  return (
    <nav
      className={`px-8 py-4 bg-themeSecondary flex cursor-pointer ${className}`}
    >
      <div className="flex items-center">
        <button
          onClick={handleClick}
          className="text-themeSecondary-foreground"
        >
          <Menu size={24} />
        </button>
        {toggleTitle && (
          <span className="capitalize ml-2 text-themeSecondary-foreground">
            All Categories
          </span>
        )}
      </div>
      {isShow && (
        <div className="absolute w-full px-2 left-0 bottom-[110%] z-40">
          <ul className="grid grid-cols-3  w-full bg-themeSecondary text-themeSecondary-foreground shadow-md p-5 transition duration-300  rounded">
            {allCategories.map((category) => (
              <li key={category?.id}>
                <Link
                  className="hover:text-themePrimary"
                  href={`/category/${category?.id}`}
                >
                  - {category?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileCategoryListMenu;
