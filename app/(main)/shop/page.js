import ShopProducts from "./_components/ShopProducts";
import ShopSidebar from "./_components/ShopSidebar";
import BreadCrumb from "@/components/BreadCrumb";
const paths = [
   {
     label: "Shop",
     href: "/shop",
   },
 ];
const ShopPage = () => {
   return (
      <main className="container px-1 sm:px-4 lg:px-8  py-4 lg:py-12">
         <BreadCrumb paths={paths}/>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6 items-start">
        <ShopSidebar />
        <ShopProducts min={0} max={0} size={0} category={0} search={0}/>
        </div>
      </main>
   );
};

export default ShopPage;