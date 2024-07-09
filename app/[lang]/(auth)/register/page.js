import Link from "next/link";
import SocialLogin from "../_components/SocialLogin";
import RegistrationForm from "./_components/RegistrationForm"; 
import GoHomeBtn from "../_components/GoHomeBtn"; 
import { getDictionary } from "../../dictionary/dictionary";

const RegistrationPage = async({params:{lang}}) => {
  const dictionary=await getDictionary(lang)
  return (
    <div className="bg-secondary py-14 md:py-24 lg:py-28 px-2">
      <div className="max-w-3xl mx-auto space-y-6">
        <GoHomeBtn lang={lang}/>
        <div className="bg-white dark:bg-gray-700 px-6 md:px-12 py-12 ">
        <div className="mb-6 space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl dark:text-white  text-themePrimary font-semibold">
              {dictionary?.register}
            </h2>
            <p className="text-lg">{dictionary?.becomeHappyBookLover}</p>
          </div>
          <RegistrationForm dictionary={dictionary}/>
          <SocialLogin dictionary={dictionary}/>
        </div>
        <div className="bg-white dark:bg-gray-700 px-6 md:px-12 py-6 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl md:text-2xl font-semibold text-themeSecondary dark:text-themePrimary ">
              {dictionary?.alreadyHaveAccount}
            </h2>
            <Link className="outline-btn py-2 rounded-md px-3" href={`/${lang}/login`} >
            {dictionary?.login}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
