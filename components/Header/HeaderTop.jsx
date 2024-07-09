import SocialProfiles from "../SocialProfiles";
import Announcements from "./Announcement";
import CustomerSupport from "./CustomerSupport";
const social= {
  facebook: "https://www.facebook.com/",
  twitter: "https://www.twitter.com/",
  linkedIn: "https://www.linkedin.com/in/",
}
const HeaderTop = ({dictionary}) => {
  return (
    <div className="md:bg-themePrimary text-themePrimary-foreground ">
      <div className="container grid grid-cols-2 md:grid-cols-5 items-center justify-center">
        <CustomerSupport dictionary={dictionary} className="order-1 bg-themePrimary rounded-xl rounded-t-none rounded-r-none h-[35px]" />
        <Announcements dictionary={dictionary} className="order-3 md:order-2 col-span-2 md:col-span-3" />
        <SocialProfiles links={social} className="order-2 bg-[#468966]   md:bg-transparent rounded-xl rounded-t-none rounded-l-none h-[35px]" />
      </div>
    </div>
  );
};

export default HeaderTop;
