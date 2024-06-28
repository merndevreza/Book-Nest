import { House } from "lucide-react";
import Link from "next/link";

const HomeIcon = ({showTitle}) => {
   return (
      <Link className=" flex flex-col items-center"  href="/">
         <House size={24}/>
         {
            showTitle && <span className="font-semibold">Home</span>
         }
         
      </Link>
   );
};

export default HomeIcon;