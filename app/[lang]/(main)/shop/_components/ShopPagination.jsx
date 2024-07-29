"use client";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent, 
  PaginationItem, 
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { countPublishedProducts } from "@/database/queries/products.queries";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ShopPagination = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const handlePagination = (number) => {};
  const handlePrev = () => {};
  const handleNext = () => {};

  //set or reset pagination
  useEffect(() => {
    const getCount = async () => {
      const response = await countPublishedProducts();
      if (response.success === true) {
        setCount(response.data);
      } else {
        setCount(0);
      }
    };
    getCount();
  }, []);

  //generate buttons
  const productsPerPage = 8;
  const totalPage = Math.ceil(count / productsPerPage);
  let items = [];
  for (let i = 1; i <= totalPage; i++) {
    items.push(
      <PaginationItem>
        <Button
          className={
            page === i
              ? "bg-slate-950 hover:bg-black"
              : "hover:bg-black bg-slate-900"
          }
          variant="outline"
          type="button"
          onClick={() => setPage(i)}
        >
          {i}
        </Button>
      </PaginationItem>
    );
  }
  
  return (
    <Pagination className="bg-secondary py-2 w-full mt-6 rounded-lg">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => setPage(page - 1)}
            className={`${
              page === 1 && "pointer-events-none cursor-not-allowed"
            } bg-slate-900 hover:bg-slate-950 cursor-pointer`}
          />
        </PaginationItem>
        {items}
        <PaginationItem>
          <PaginationNext 
           onClick={() => setPage(page + 1)}
            className={`${
              page === totalPage && "pointer-events-none cursor-not-allowed"
            } bg-slate-900 hover:bg-slate-950 cursor-pointer`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ShopPagination;
