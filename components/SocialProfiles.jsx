import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const SocialProfiles = ({ className }) => {
  return (
   <ul className={`flex items-center justify-center md:justify-end gap-2 text-2xl ${className}`}>
   <li>
     <Link href="https://www.facebook.com/webdevreza/">
       <Facebook size={20} />
     </Link>
   </li>
   <li>
     <Link href="https://twitter.com/">
       <Twitter size={20} />
     </Link>
   </li>
   <li>
     <Link href="https://www.linkedin.com/in/webdevreza/">
       <Linkedin size={20} />
     </Link>
   </li>
 </ul>
  );
};

export default SocialProfiles;
