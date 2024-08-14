import { RotateCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import sadBookImg from "@/public/assets/images/sad-book.png"

const NoProductsFound = ({ title, subtitle, lang, isShopPage }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Image width={120} src={sadBookImg} alt="User not Logged in" />
      <h2 className="text-2xl">{title}</h2>
      <p className="text-xl">{subtitle}</p>
      <Link className="primary-btn h-11 rounded-md px-8" href={`/${lang}/shop`}>
        {isShopPage ? (
          <span className="flex gap-4 items-center">
            <span>Reload </span>
            <RotateCcw />
          </span>
        ) : (
          "Visit Shop"
        )}
      </Link>
    </div>
  );
};

export default NoProductsFound;
