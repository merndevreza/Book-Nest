import { House } from "lucide-react";
import Link from "next/link";

const GoHomeBtn = () => {
   return (
      <Link href="/" className="inline-block bg-transparent text-themePrimary p-2 border-2 rounded-full border-themePrimary -mb-2">
         <House size={20}/>
      </Link>
   );
};

export default GoHomeBtn;