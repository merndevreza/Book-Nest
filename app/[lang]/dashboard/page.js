import BreadCrumb from "@/components/BreadCrumb";
import RevenueCard from "./_components/Analytics/RevenueCard";
import TotalSoldCard from "./_components/Analytics/TotalSoldCard";
import TotalListedBooksCard from "./_components/Analytics/TotalListedBooksCard";
import TotalUsersCard from "./_components/Analytics/TotalUsersCard";
import SalesOverviewChart from "./_components/Analytics/SalesOverviewChart";
import CustomerGrowthChart from "./_components/Analytics/CustomerGrowthChart";

const paths = [
  {
    label: "Analytics",
    href: "dashboard",
  },
];
const DashboardPage = ({ params: { lang } }) => {
  return (
    <div className="mb-6">
      <BreadCrumb lang={lang} paths={paths} />
      <main className="grid flex-1 items-start gap-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <RevenueCard />
          <TotalSoldCard />
          <TotalListedBooksCard />
          <TotalUsersCard />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 "> 
          <SalesOverviewChart/> 
          <CustomerGrowthChart/>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
