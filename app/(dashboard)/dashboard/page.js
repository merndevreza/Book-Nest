import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart } from "./_components/Analytics/Chart";
import { Activity, CreditCard, DollarSign, Library, Users } from "lucide-react";
import { UsersChart } from "./_components/Analytics/UsersChart";
import BreadCrumb from "@/components/BreadCrumb";

const paths = [
   {
     label: "Analytics",
     href: "/dashboard",
   }, 
 ];
const DashboardPage = () => {
  return (
    <div className="mb-6">
      <BreadCrumb paths={paths} />
      <main className="grid flex-1 items-start gap-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Books Sold
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Books Listed</CardTitle>
              <Library className="h-4 w-4 text-muted-foreground" /> 
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total User</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 ">
          <Chart />
          <UsersChart />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
