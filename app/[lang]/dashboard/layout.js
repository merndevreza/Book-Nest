import { Dashboard } from "./_components/Dashboard";
import UserProfileCard from "@/components/UserProfileCard";

export default async function DashboardLayout({ children, params: { lang } }) {
  return (
    <main className="container">
      <UserProfileCard />
      <section>
        <Dashboard lang={lang}>{children}</Dashboard>
      </section>
    </main>
  );
}
