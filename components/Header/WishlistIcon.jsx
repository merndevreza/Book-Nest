import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "../ui/badge";
import WishlistBadge from "./WishlistBadge";

const WishlistIcon = ({session, className, showTitle, lang }) => {
  return (
    <Link
      href={`/${lang}/wishlist`}
      className={cn(
        `bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-2 pt-3 ${className}`
      )}
    >
      <span className="relative inline-block">
        <Heart size={24} />
        {session && (
         <WishlistBadge/>
        )}
      </span>
      {showTitle && <span className="font-semibold">Wishlist</span>}
    </Link>
  );
};

export default WishlistIcon;
