import { getDictionary } from "../../dictionary/dictionary";
import UserAddressCard from "./_components/profile/UserAddressCard";

const ProfilePage = async({params:{lang}}) => {
  const dictionary=await getDictionary(lang)
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="grid gap-4 grid-cols-2">
        <UserAddressCard address="" cardTitle={dictionary?.billingAddress}/>
        <UserAddressCard address="" cardTitle={dictionary?.shippingAddress} />
      </div>
    </div>
  );
};

export default ProfilePage;
