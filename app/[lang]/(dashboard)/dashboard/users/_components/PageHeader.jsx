import BreadCrumb from "@/components/BreadCrumb";
import SearchProducts from "./SearchProducts";

const paths = [
  {
    label: "Dashboard",
    href: "dashboard",
  },
  {
    label: "Users",
    href: "dashboard/users",
  },
];
const PageHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="hidden md:block">
        <BreadCrumb lang={lang} paths={paths} />
      </div>
      <SearchProducts />
    </div>
  );
};

export default PageHeader;
