import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody, 
  TableCell, 
  TableRow,
} from "@/components/ui/table";

const SpecificationTabContent = ({dictionary}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{dictionary?.specification}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">{dictionary?.edition}:</TableCell>
              <TableCell>First Edition</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">{dictionary?.publisher}:</TableCell>
              <TableCell>Grontho kotha</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">{dictionary?.pages}:</TableCell>
              <TableCell>546 pages</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">{dictionary?.language}:	</TableCell>
              <TableCell>English</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">{dictionary?.format}:</TableCell>
              <TableCell>Printed, Ebook, Audio book</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">{dictionary?.country}:</TableCell>
              <TableCell>Bangladesh</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SpecificationTabContent;
