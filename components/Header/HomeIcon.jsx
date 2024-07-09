import { House } from "lucide-react";
import Link from "next/link";

const HomeIcon = ({showTitle,lang}) => {
   return (
      <Link className=" flex flex-col items-center  text-sm" href={`/${lang}`} >
         <House size={24}/>
         {
            showTitle && <span className="font-semibold">Home</span>
         }
         
      </Link>
   );
};

export default HomeIcon;