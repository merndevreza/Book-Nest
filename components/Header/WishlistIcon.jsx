import { Heart } from "lucide-react"; 
import Link from "next/link";

const WishlistIcon = () => {
  return (
    <Link className="inline-block p-2 relative" href="#">
      <Heart  size={24}/>
      <span className="inline-block w-5 h-5 rounded-full bg-themeSecondary text-themeSecondary-foreground absolute top-0 -right-1 text-sm text-center">9</span>
    </Link>
  );
};

export default WishlistIcon;
