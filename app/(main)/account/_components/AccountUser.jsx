import Image from "next/image";
import userImg from "@/public/assets/images/user-2.jpg"
import LogoutBtn from "@/components/LogOut";

const AccountUser = () => {
  return (
    <section className="flex items-center gap-3  py-12">
      <div>
        <Image
          className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full"
          src={userImg}
          alt="user name"
        />
      </div>
      <div>
        <h3 className="text-2xl text-themePrimary">Adam Jhon</h3>
        <p className="mb-2">adam@gmail.com</p>
        <LogoutBtn variant="themePrimary"/>
      </div>
    </section>
  );
};

export default AccountUser;
