import SocialBtn from "./SocialBtn";

const SocialLogin = ({ dictionary }) => {
  return (
    <div>
      <div className="relative text-center before:w-full before:h-[2px] before:bg-themePrimary dark:before:bg-white  before:absolute before:left-0 mt-20 mb-4">
        <h2 className="text-lg md:text-xl dark:text-white  dark:bg-gray-700 bg-white text-theme-black font-semibold dark:bg-theme-dark-top inline-block relative -top-3  px-4 ">
          {dictionary?.loginWith}
        </h2>
      </div>
      <div className="flex gap-3 justify-center">
        <SocialBtn btnName="Google" value="google" />
        <SocialBtn btnName="LinkedIn" value="linkedin" />
      </div>
    </div>
  );
};

export default SocialLogin;
