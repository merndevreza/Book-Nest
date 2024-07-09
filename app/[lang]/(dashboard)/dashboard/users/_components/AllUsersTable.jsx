import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card";
 import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
 } from "@/components/ui/table";
 import { TabsContent } from "@/components/ui/tabs"; 
import TableRowUserInfo from "./TableRowUserInfo";
const AllUsersTable = () => {
   return (
      <TabsContent value="all">
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Manage your users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead> 
                <TableHead className="hidden md:table-cell">
                  Created at
                </TableHead>
                <TableHead> 
                  <span >Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* all users map here */}
              <TableRowUserInfo/>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> Users
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
   );
};

export default AllUsersTable;