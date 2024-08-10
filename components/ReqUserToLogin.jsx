import Link from "next/link";
import sadBookImg from "@/public/assets/images/sad-book.png"
import Image from "next/image";
const ReqUserToLogin = ({ lang }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Image width={120} src={sadBookImg} alt="User not Logged in"/>
      <h2 className="text-2xl">You are not logged in!</h2>
      <p className="text-xl">Please login...</p>
      <Link className="primary-btn h-11 rounded-md px-8" href={`${lang}/login`}>Login</Link>
    </div>
  );
};

export default ReqUserToLogin;
