import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const SpecificationTabContent = ({ book, dictionary }) => {
  const { 
    formats,
    edition,
    publisher,
    page,
    language,
    country, 
  } = book;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{dictionary?.specification}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">
                {dictionary?.edition}:
              </TableCell>
              <TableCell>{edition}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">
                {dictionary?.publisher}:
              </TableCell>
              <TableCell>{publisher}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">
                {dictionary?.pages}:
              </TableCell>
              <TableCell>{page} pages</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">
                {dictionary?.language}:{" "}
              </TableCell>
              <TableCell>{language}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">
                {dictionary?.format}:
              </TableCell>
              <TableCell>
                {formats
                  .map((format) => {
                    if (format === "printedBook") {
                      return "Printed Book";
                    } else if (format === "ebook") {
                      return " Ebook";
                    } else if (format === "audioBook") {
                      return " Audio Book ";
                    }
                  })
                  .toString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-1/4 font-medium ">
                {dictionary?.country}:
              </TableCell>
              <TableCell>{country}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SpecificationTabContent;
