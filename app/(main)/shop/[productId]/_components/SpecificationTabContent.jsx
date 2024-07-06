import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SpecificationTabContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Specification</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">Edition:</TableCell>
              <TableCell>First Edition</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">Publisher:</TableCell>
              <TableCell>Grontho kotha</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">Pages:</TableCell>
              <TableCell>546 pages</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">Language:	</TableCell>
              <TableCell>English</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">Format:</TableCell>
              <TableCell>Printed, Ebook, Audio book</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">Country:</TableCell>
              <TableCell>Bangladesh</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SpecificationTabContent;
