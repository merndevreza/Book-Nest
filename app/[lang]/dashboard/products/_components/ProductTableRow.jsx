import starIcon from "@/public/assets/images/star.svg";
import emptyStarIcon from "@/public/assets/images/star-empty.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal, Star } from "lucide-react";
import Image from "next/image";
import productPlaceholderImg from "@/public/assets/images/book-placeholder.png";
import AvailableTypes from "@/components/AvailableTypes";

const ProductTableRow = () => {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          height="120"
          src={productPlaceholderImg}
          width="80"
        />
      </TableCell>
      <TableCell className="font-medium space-y-1 p-2 sm:p-4">
        <span className="block text-sm sm:text-base">Laser Lemonade Machine</span>
        <span className="hidden sm:block text-[12px]">
          Author: Kaji Nazrul Islam
        </span>
      </TableCell>
      <TableCell className=" p-2 sm:p-4">
        <Badge variant="outline">Draft</Badge>
      </TableCell>
      <TableCell className="space-y-3 hidden md:table-cell">
        <AvailableTypes type="printedBook" />
        <AvailableTypes type="ebook" />
        <AvailableTypes type="audioBook" />
      </TableCell>
      <TableCell className="hidden md:table-cell">25</TableCell>
      <TableCell className="hidden md:table-cell">25</TableCell>
      <TableCell  className="p-2 sm:p-4">
        <Image className="mx-auto" src={starIcon} alt="Star" />
        {/* <Image src={emptyStarIcon} alt="Star" /> */}
      </TableCell>
      <TableCell className=" p-0 sm:p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default ProductTableRow;
