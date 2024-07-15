import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MediaTable from "./MediaTable";
import BreadCrumb from "@/components/BreadCrumb";

const paths = [
  {
    label: "Dashboard",
    href: "dashboard",
  },
  {
    label: "Media",
    href: "dashboard/media",
  },
];
const MediaPage = ({ params: { lang } }) => {
  return (
    <div>
      <BreadCrumb lang={lang} paths={paths} />
      <main>
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Media</CardTitle>
            <CardDescription>
              Manage all uploaded Files from here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MediaTable />
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong> products
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default MediaPage;
