import { House } from "lucide-react";
import Link from "next/link";

const GoHomeBtn = ({lang}) => {
   return (
      <Link href={`/${lang}`} className="inline-block bg-transparent hover:bg-gray-700 text-themePrimary p-2 border-2 rounded-full border-themePrimary -mb-2">
         <House size={20}/>
      </Link>
   );
};

export default GoHomeBtn;