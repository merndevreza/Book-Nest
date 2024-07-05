import { AccountDashboard } from "./_components/AccountDashboard";
import AccountUser from "./_components/AccountUser";

export default function UserDashboard({ children }) {
  return (
    <main className="container">
      <AccountUser />
      <section>
        <AccountDashboard>{children}</AccountDashboard>
      </section>
    </main>
  );
}
