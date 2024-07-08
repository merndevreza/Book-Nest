import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const NotificationCard = ({ notification }) => {
  return (
    <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{notification?.title}</CardTitle>
        <CardDescription className="leading-relaxed">
          {notification?.details}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link className="primary-btn px-6 py-2" href={notification?.href}>
          Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NotificationCard;
