import { Button } from "@/components/ui/button"; 

const CheckoutSummary = () => {
  return (
    <div className="col-span-3 lg:col-span-1">
      <section className=" border border-gray-200 p-4 rounded">
        <h4 className="text-themePrimary text-lg mb-4 font-medium uppercase">
          order summary
        </h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <div>
              <h5 className="text-themePrimary-foreground font-medium">
                Book Title
              </h5>
              <p className="text-sm dark:text-gray-400 text-gray-700">
                Format: PDF
              </p>
            </div>
            <p className="dark:text-gray-400 text-gray-700">x2</p>
            <p className="text-themePrimary font-medium">$122</p>
          </div>
        </div>

        <div className="flex justify-between border-b border-gray-200 mt-1  font-medium py-3 uppercase ">
          <p>subtotal</p>
          <p className="text-themePrimary ">$122</p>
        </div>

        <div className="flex justify-between border-b border-gray-200 mt-1  font-medium py-3 uppercase">
          <p>shipping</p>
          <p className="text-themePrimary ">Free</p>
        </div>

        <div className="flex justify-between  font-medium py-3 uppercase">
          <p className="font-semibold">Total</p>
          <p className="text-themePrimary ">$122</p>
        </div>
        <Button className="w-full " variant="themePrimary">Place order</Button>
      </section>
    </div>
  );
};

export default CheckoutSummary;
