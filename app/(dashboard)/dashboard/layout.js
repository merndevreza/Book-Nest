 import { Dashboard } from "./_components/Dashboard";
import UserProfileCard from "@/components/UserProfileCard";

export default function DashboardLayout({ children }) {
  return (
    <main className="container">  
    <UserProfileCard/>
    <section>
      <Dashboard>{children}</Dashboard>
    </section>
  </main>
  );
}
