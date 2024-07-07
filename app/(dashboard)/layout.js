
import AccountUser from "../(main)/account/_components/AccountUser";
import { Dashboard } from "./_components/Dashboard" 
 

export default function DashboardLayout({ children }) {
  return (
    <main className="container"> 
    <AccountUser/>
    <section>
      <Dashboard>{children}</Dashboard>
    </section>
  </main>
  );
}
