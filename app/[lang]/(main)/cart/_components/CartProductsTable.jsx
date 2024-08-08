import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RemoveFromCartBtn from "./RemoveFromCartBtn";
import CartBookInfo from "./CartBookInfo";
import Link from "next/link";
import Subtotal from "./Subtotal";
import { camelCaseToCapitalized } from "@/utils/camelCaseToCapitalized";
const CartProductsTable = ({ books, setBooks, userId, dictionary, lang }) => {
  return (
    <div className="col-span-5 lg:col-span-3">
      <Table>
        <TableHeader className="text-lg bg-secondary">
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="text-left">{dictionary?.book}</TableHead>
            <TableHead className="text-center hidden md:table-cell">
              {dictionary?.format}
            </TableHead>
            <TableHead className="text-center">
              {dictionary?.subtotal}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id} className="hover:bg-secondary">
              <TableCell className="font-medium pl-1 pr-0 sm:p-4">
                <RemoveFromCartBtn 
                  setBooks={setBooks}
                  itemId={book?.id}
                />
              </TableCell>
              <TableCell className=" pl-1 pr-0 sm:p-4"> 
                  <CartBookInfo book={book} lang={lang}/> 
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex gap-2 justify-center my-2">
                  <p>{camelCaseToCapitalized(book?.format)}</p>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex gap-2 justify-center my-2 md:hidden">
                  <p>{camelCaseToCapitalized(book?.format)}</p>
                </div>
                <Subtotal
                book={book}
                  books={books}
                  setBooks={setBooks}
                  format={book?.format}
                  productPrice={book?.productId?.price}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartProductsTable;
