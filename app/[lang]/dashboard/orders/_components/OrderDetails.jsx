import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Truck } from "lucide-react";
import Link from "next/link";

const OrderDetails = ({ lang }) => {
  return (
    <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader className=" bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="flex items-center gap-2 text-lg">
            Order Oe31b70H
          </CardTitle>
          <CardDescription>Date: November 23, 2023</CardDescription>
        </div> 
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Order Details</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Glimmer Lamps x <span>2</span>
              </span>
              <span>$250.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Aqua Filters x <span>1</span>
              </span>
              <span>$49.00</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$299.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>$5.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>$25.00</span>
            </li>
            <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Total</span>
              <span>$329.00</span>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-3">
            <div className="font-semibold">Shipping Information</div>
            <address className="grid gap-0.5 not-italic text-muted-foreground">
              <span>Liam Johnson</span>
              <span>1234 Main St.</span>
              <span>Anytown, CA 12345</span>
            </address>
          </div>
          <div className="grid auto-rows-max gap-3">
            <div className="font-semibold">Billing Information</div>
            <div className="text-muted-foreground">
              Same as shipping address
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Payment Information</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-1 text-muted-foreground">
                <CreditCard className="h-4 w-4" />
                Visa
              </dt>
              <dd>**** **** **** 4532</dd>
            </div>
          </dl>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderDetails;
