import { User } from "lucide-react";  
import Link from "next/link";
import { cn } from "@/lib/utils";

const UserIcon = ({className,showTitle}) => {
   return (
    <Link href="/account" className={cn(`bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-2 pt-3 ${className}`)}>
    <span className="inline-block">
    <User size={24} /> 
    </span>
    {showTitle && <span className="font-semibold">Account</span>}
  </Link>  
   );
};

export default UserIcon;