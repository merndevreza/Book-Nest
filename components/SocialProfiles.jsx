import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const SocialProfiles = ({ links, className }) => {
  return (
    <ul
      className={cn(
        `flex items-center justify-center md:justify-end gap-2 text-2xl ${className}`
      )}
    >
      {links?.facebook && (
        <li>
          <Link href={links?.facebook}>
            <Facebook size={20} />
          </Link>
        </li>
      )}
      {links?.twitter && (
        <li>
          <Link href={links?.twitter}>
            <Twitter size={20} />
          </Link>
        </li>
      )}
      {links?.linkedIn && (
        <li>
          <Link href={links?.linkedIn}>
            <Linkedin size={20} />
          </Link>
        </li>
      )}
    </ul>
  );
};

export default SocialProfiles;
