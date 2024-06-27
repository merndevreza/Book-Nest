import { User } from "lucide-react";
import Link from "next/link";

const UserIcon = ({className}) => {
   return (
      <Link className={`inline-block p-2 ${className}`} href="#">
         <User  size={24}/>
      </Link>
   );
};

export default UserIcon;