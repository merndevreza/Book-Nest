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
import QuantityInput from "@/components/QuantityInput";
import AvailableTypes from "@/components/AvailableTypes";
const CartProductsTable = ({ books,className }) => {
  return (
   <div className={className}>
    <Table>
      <TableHeader className="text-lg">
        <TableRow >
          <TableHead></TableHead>
          <TableHead className="text-left">Book</TableHead>
          <TableHead className="text-center hidden md:table-cell">Format</TableHead>
          <TableHead className="text-center">Subtotal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book.id} className="hover:bg-secondary">
            <TableCell className="font-medium pl-1 pr-0 sm:p-4">
              <RemoveFromCartBtn />
            </TableCell>
            <TableCell className=" pl-1 pr-0 sm:p-4">
              <CartBookInfo book={book} />
            </TableCell>
            <TableCell className="hidden md:table-cell">
            <div className="flex gap-2 justify-center my-2">
              {book?.types.map((type) => (
                <AvailableTypes type={type} key={type} />
              ))}
            </div>
            </TableCell>
            <TableCell className="text-center">
            <div className="flex gap-2 justify-center my-2 md:hidden">
              {book?.types.map((type) => (
                <AvailableTypes type={type} key={type} />
              ))}
            </div>
              <p className="text-base sm:text-xl mb-2 dark:text-themePrimary font-semibold">
                ${book?.discountedPrice || book?.regularPrice}
              </p>
              <QuantityInput />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table></div>
  );
};

export default CartProductsTable;
