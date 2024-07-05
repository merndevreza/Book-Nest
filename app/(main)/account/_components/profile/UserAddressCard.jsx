import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EditButton from "./EditButton";
import { Separator } from "@radix-ui/react-dropdown-menu";

const UserAddressCard = ({cardTitle,address}) => {
   return (
      <Card
          className="col-span-2 xl:col-span-1"
          x-chunk="dashboard-05-chunk-0"
        >
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="mb-3">{cardTitle}</CardTitle>
              <EditButton />
            </div>
            <Separator />
          </CardHeader>
          <CardContent className="">
            <h3>Name: Rezaul</h3>
            <p>Address</p>
            <p>Phone</p>
            <p>Email</p>
          </CardContent>
        </Card>
   );
};

export default UserAddressCard;