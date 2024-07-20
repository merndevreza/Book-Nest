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
import ProductTableRow from "./ProductTableRow";

const AllProductsTabContent = () => {
  return (
    <TabsContent value="all">
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[150px] sm:table-cell">
                Image
                </TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Formats</TableHead>
                <TableHead className="hidden md:table-cell">
                  Total Sales
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Created at
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* all products map here */}
              <ProductTableRow />
            </TableBody>
          </Table>
        </CardContent> 
      </Card>
    </TabsContent>
  );
};

export default AllProductsTabContent;
