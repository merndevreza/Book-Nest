import UserProfileCard from "@/components/UserProfileCard";
import { AccountDashboard } from "./_components/AccountDashboard"; 
import { getDictionary } from "../../dictionary/dictionary";

export default async function UserDashboard({ children,params:{lang} }) {
  const dictionary=await getDictionary(lang)
  return (
    <main className="container">
      <UserProfileCard/>
      <section>
        <AccountDashboard lang={lang} dictionary={dictionary}>{children}</AccountDashboard>
      </section>
    </main>
  );
}
