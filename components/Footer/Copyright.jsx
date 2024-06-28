import Image from "next/image";
import Link from "next/link";
import paymentImg from "@/public/assets/images/payments.png";

const Copyright = () => {
  return (
    <div className="bg-black py-2">
      <div className="flex gap-2 items-center justify-center  md:justify-between h-[50px] container flex-col md:flex-row">
        <p className="text-sm md:text-base">
          &copy; 2024 - All right reserved by{"   "}
          <Link
            className="text-themePrimary underline"
            href="https://fiverr.com/rezaul_karim_bd"
          >
            Rezaul Karim
          </Link>
        </p>
        <div className="flex gap-2">
          <p className="text-sm md:text-base">Payment Options:</p>
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
