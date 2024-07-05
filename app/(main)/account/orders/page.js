import OrderDetails from "./_components/OrderDetails";
import OrderTable from "./_components/OrderTable";

const page = () => {
   return (
      <div className="flex min-h-screen w-full flex-col">
      <main className="grid flex-1 items-start gap-4 md:gap-8 xl:grid-cols-5">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 xl:col-span-3">
          <OrderTable/>
        </div>
        <div className="xl:col-span-2">
          <OrderDetails/>
        </div>
      </main>
    </div>
   );
};

export default page;
