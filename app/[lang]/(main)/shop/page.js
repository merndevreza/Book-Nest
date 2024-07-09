import { getDictionary } from "../../dictionary/dictionary";
import ShopProducts from "./_components/ShopProducts";
import ShopSidebar from "./_components/ShopSidebar";
import BreadCrumb from "@/components/BreadCrumb";
const paths = [
  {
    label: "Shop",
    href: "shop",
  },
];
const ShopPage = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  return (
    <main className="container px-1 sm:px-4 lg:px-8  py-4 lg:py-12">
      <BreadCrumb lang={lang} paths={paths} />
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6 items-start">
        <ShopSidebar dictionary={dictionary} />
        <ShopProducts
          min={0}
          max={0}
          size={0}
          category={0}
          search={0}
          lang={lang}
          dictionary={dictionary}
        />
      </div>
    </main>
  );
};

export default ShopPage;
