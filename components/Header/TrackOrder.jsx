import { Truck } from "lucide-react";
import Link from "next/link";

const TrackOrder = () => {
  return (
    <Link href="#" className="flex gap-1  hover:underline">
      <Truck /> <strong className="tracking-wide">Order Tracking</strong>
    </Link>
  );
};

export default TrackOrder;
