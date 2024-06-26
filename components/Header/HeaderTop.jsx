import SocialProfiles from "../SocialProfiles";
import Announcements from "./Announcement";
import CustomerSupport from "./CustomerSupport";

const HeaderTop = () => {
  return (
    <div className="md:bg-themePrimary text-themePrimary-foreground ">
      <div className="container grid grid-cols-2 md:grid-cols-3 items-center ">
        <CustomerSupport className="order-1 bg-themePrimary rounded-xl rounded-t-none rounded-r-none h-[35px]" />
        <Announcements className="order-3 md:order-2 col-span-2 md:col-span-1" />
        <SocialProfiles className="order-2 bg-[#468966]   md:bg-transparent rounded-xl rounded-t-none rounded-l-none h-[35px]" />
      </div>
    </div>
  );
};

export default HeaderTop;
