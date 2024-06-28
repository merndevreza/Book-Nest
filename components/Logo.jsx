import logo from "@/public/assets/images/logo-2.png";
import Image from "next/image";
import Link from "next/link";
const Logo = ({className}) => {
  return (
    <Link className={`block w-[120px] mx-auto md:mx-0 ${className}`} href="/">
      <Image src={logo} alt="Book Nest Logo" />
      <p className="text-lg md:text-xl font-semibold  text-center font-asul">
        <span className="text-themePrimary">Book</span>{" "}
        <span className="text-themeSecondary">Nest</span>
      </p>
    </Link>
  );
};

export default Logo;
