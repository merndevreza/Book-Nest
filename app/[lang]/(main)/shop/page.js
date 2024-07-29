import { getDictionary } from "../../dictionary/dictionary";
import ShopPagination from "./_components/ShopPagination";
import ShopProducts from "./_components/ShopProducts";
import ShopSidebar from "./_components/ShopSidebar";
import BreadCrumb from "@/components/BreadCrumb";
const paths = [
  {
    label: "Shop",
    href: "shop",
  },
];
const ShopPage = async ({ params: { lang }, searchParams }) => {
  const dictionary = await getDictionary(lang);
  return (
    <main className="container px-1 sm:px-4 lg:px-8  py-4 lg:py-12">
      <BreadCrumb lang={lang} paths={paths} />
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6 items-start">
        <ShopSidebar dictionary={dictionary} />
        <div className="col-span-3">
          <ShopProducts
            searchParams={searchParams}
            lang={lang}
            dictionary={dictionary}
          />
          <ShopPagination />
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
