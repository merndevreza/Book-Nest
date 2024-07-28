
import { Menu } from "lucide-react";
import ads1 from "@/public/assets/images/ads/product1.jpg";
import ads2 from "@/public/assets/images/ads/product2.jpg";
import ads3 from "@/public/assets/images/ads/product3.jpg";
import ads4 from "@/public/assets/images/ads/product4.jpg"; 
import CategoryListMenu from "../CategoryListMenu";
import ImageCarousel from "../ImageCarousel";
import { cn } from "@/lib/utils";

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
const CategoriesMegaMenu = ({ categories, className, toggleTitle,dictionary,lang }) => {
  return (
    <nav className={cn(`px-8 py-4 bg-themeSecondary flex category-center cursor-pointer group ${className}`)}>
      <div className="flex items-center">
        <span className="text-themeSecondary-foreground">
          <Menu size={24} />
        </span>
        {toggleTitle && (
          <span className="capitalize ml-2 text-themeSecondary-foreground">{dictionary?.allCategories}</span>
        )}
      </div>
      <div className="grid grid-cols-4 absolute w-full bg-themeSecondary dark:bg-secondary text-themeSecondary-foreground left-0 top-full shadow-md p-5 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-40 rounded">
        <div className="col-span-3 ">
          <CategoryListMenu categories={categories} lang={lang}/>
        </div>
        <div>
          <ImageCarousel
            imageArray={ads}
            isLoop={true}
            orientation="horizontal"
            height={300} 
            className="rounded-lg"
          />
        </div>
      </div>
    </nav>
  );
};

export default CategoriesMegaMenu;
 