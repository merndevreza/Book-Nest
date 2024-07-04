import { cn } from "@/lib/utils";
import Link from "next/link";

const CartSummary = () => {
  return (
    <div className="col-span-5 lg:col-span-2">
      <section className=" border border-gray-200 p-4 rounded">
        <h4 className="text-themePrimary text-lg mb-4 font-medium uppercase">
          order summary
        </h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <div>
              <h5 className="text-themePrimary-foreground font-medium">Book Title</h5>
              <p className="text-sm dark:text-gray-400 text-gray-700">Format: PDF</p>
            </div>
            <p className="dark:text-gray-400 text-gray-700">x2</p>
            <p className="text-themePrimary font-medium">$122</p>
          </div> 
        </div>

        <div className="flex justify-between  font-medium py-3 mt-3 uppercase border-t border-gray-200">
          <p className="font-semibold">Total</p>
          <p className="text-themePrimary ">$122</p>
        </div>
 
        <Link className={cn("primary-btn w-full text-center uppercase")} href="/checkout">
        Checkout
        </Link>
      </section>
    </div>
  );
};

export default CartSummary;
