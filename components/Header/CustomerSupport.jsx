import { cn } from "@/lib/utils";
import { Headset } from "lucide-react";

const CustomerSupport = ({className, dictionary}) => {
   return (
      <span className={cn(`flex justify-center md:justify-start items-center gap-1 ${className}`)}>
        <Headset /> <strong className="tracking-wide">{dictionary?.phone}</strong>
      </span>
   );
};

export default CustomerSupport;