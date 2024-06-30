import { cn } from "@/lib/utils";
import logo from "@/public/assets/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
const Logo = ({className,logoTextClassName}) => {
  return (
    <Link className={cn(`block ${className}`)} href="/">
      <Image src={logo} alt="Book Nest Logo" />
      <p className={cn(`text-lg md:text-xl font-semibold font-asul ${logoTextClassName}`)}>
        <span className="text-themePrimary">Book</span>{" "}
        <span className="text-themeSecondary">Nest</span>
      </p>
    </Link>
  );
};

export default Logo;
