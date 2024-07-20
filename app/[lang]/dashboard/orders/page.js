import BreadCrumb from "@/components/BreadCrumb";
import OrderDetails from "./_components/OrderDetails";
import OrderTable from "./_components/OrderTable";
import { getDictionary } from "@/app/[lang]/dictionary/dictionary";

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
const OrdersPage = ({params:{lang}}) => { 
   return (
      <div>
         <BreadCrumb lang={lang} paths={paths} />
      <main className="grid flex-1 items-start gap-4 md:gap-8 xl:grid-cols-5">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 xl:col-span-3">
          <OrderTable/>
        </div>
        <div className="xl:col-span-2">
          <OrderDetails lang={lang}/>
        </div>
      </main>
    </div>
   );
};

export default OrdersPage; 