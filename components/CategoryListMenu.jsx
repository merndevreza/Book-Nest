"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import ads1 from "@/public/assets/images/ads/product1.jpg";
import ads2 from "@/public/assets/images/ads/product2.jpg";
import ads3 from "@/public/assets/images/ads/product3.jpg";
import ads4 from "@/public/assets/images/ads/product4.jpg";
import ImageCarousel from "./ImageCarousel";

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
const ads = [
  {
    src: ads1,
    alt: "Ghost Book",
  },
  {
    src: ads2,
    alt: "Science Book",
  },
  {
    src: ads3,
    alt: "Arts Book",
  },
  {
    src: ads4,
    alt: "Ghost Book",
  },
];
const CategoryListMenu = ({ className, toggleTitle }) => {
  return (
    <nav className={`px-8 py-4 bg-themeSecondary flex category-center cursor-pointer group ${className}`}>
      <div className="flex items-center">
        <span className="text-themeSecondary-foreground">
          <Menu size={24} />
        </span>
        {toggleTitle && (
          <span className="capitalize ml-2 text-themeSecondary-foreground">All Categories</span>
        )}
      </div>
      <div className="grid grid-cols-4 absolute w-full bg-themeSecondary text-themeSecondary-foreground left-0 top-full shadow-md p-5 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-40 rounded">
        <div className="col-span-3 ">
          <ul className="grid grid-cols-3 ">
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
        <div>
          <ImageCarousel
            imageArray={ads}
            isLoop={true}
            orientation="horizontal"
            height={300}
          />
        </div>
      </div>
    </nav>
  );
};

export default CategoryListMenu;
