import { cn } from "@/lib/utils";
import { Headset } from "lucide-react";

const CustomerSupport = ({className}) => {
   return (
      <span className={cn(`flex justify-center md:justify-start items-center gap-1 ${className}`)}>
        <Headset /> <strong className="tracking-wide">+8801780572272</strong>
      </span>
   );
};

export default CustomerSupport;