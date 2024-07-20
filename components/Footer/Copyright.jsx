import Image from "next/image";
import Link from "next/link";
import paymentImg from "@/public/assets/images/payments.png";

const Copyright = ({dictionary}) => {
  return (
    <div className="dark:bg-gray-950 bg-gray-700 text-white py-2">
      <div className="flex gap-2 items-center justify-center  md:justify-between h-[50px] container flex-col md:flex-row px-0">
        <p className="text-sm md:text-base">
          {dictionary?.copyright}{"   "}
          <Link
            className="text-themePrimary underline"
            href="https://fiverr.com/rezaul_karim_bd"
          >
            Rezaul Karim
          </Link>
        </p>
        <div className="flex gap-2">
          <p className="text-sm md:text-base">
            {dictionary?.paymentOption}
          </p>
          <Image
            className="h-[20px] md:h-[25px] w-auto"
            src={paymentImg}
            alt="Available Payment Options"
          />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
