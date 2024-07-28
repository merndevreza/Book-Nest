import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const SpecificationTabContent = ({ book, dictionary }) => {
  const { edition, publisher, page, language, country, price } = book;
  return (
    <Card> 
      <CardContent className="space-y-2 pt-8">
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
              <TableCell className="flex gap-2">
                {(price?.printedNewBook_regularPrice ||
                  price?.printedOldBook_regularPrice) && (
                  <span className="inline-block px-2 py-[2px] rounded-sm dark:bg-gray-600 bg-gray-200">
                    Printed Book
                  </span>
                )}
                {price?.ebook_regularPrice && (
                  <span className="inline-block px-2 py-[2px] rounded-sm dark:bg-gray-600 bg-gray-200">
                    Ebook
                  </span>
                )}

                {price?.audioBook_regularPrice && (
                  <span className="inline-block px-2 py-[2px] rounded-sm dark:bg-gray-600 bg-gray-200">
                    Audio Book
                  </span>
                )}
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
