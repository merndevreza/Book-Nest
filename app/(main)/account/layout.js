import UserProfileCard from "@/components/UserProfileCard";
import { AccountDashboard } from "./_components/AccountDashboard"; 

export default function UserDashboard({ children }) {
  return (
    <main className="container">
      <UserProfileCard/>
      <section>
        <AccountDashboard>{children}</AccountDashboard>
      </section>
    </main>
  );
}
