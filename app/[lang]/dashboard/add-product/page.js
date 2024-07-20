import BreadCrumb from "@/components/BreadCrumb"; 
import AddProductForm from "./_components/AddProductForm";

const paths = [
  {
    label: "Dashboard",
    href: "dashboard",
  },
  {
    label: "Add Product",
    href: "dashboard/add-product",
  },
];
const AddProductPage = ({ params: { lang } }) => {
  return (
    <>
      <BreadCrumb lang={lang} paths={paths} />
      <main className="grid flex-1 items-start ">
          <AddProductForm/>
      </main>
    </>
  );
};

export default AddProductPage;