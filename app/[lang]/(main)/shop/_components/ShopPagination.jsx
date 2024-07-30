"use client";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ShopPagination = ({ productsCount }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Check URL for pagination info or set default
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const skipInParams = parseInt(params.get("skip"), 10);
    const limitInParams = parseInt(params.get("limit"), 10);
    if (skipInParams === 0) { 
      setPage(1); 
    } else if (skipInParams > 1) { 
      setPage(skipInParams / limit + 1);
    }

    if (limitInParams) {
      setLimit(limitInParams);
    }
  }, [searchParams,limit]);

  const handlePagination = (number) => {
    setPage(number);
    const skip = number * limit - limit;
    

    // Update the URL with new skip and limit values
    const params = new URLSearchParams(searchParams.toString());
    params.set("skip", skip);
    params.set("limit", limit);
    router.replace(`${pathname}?${params.toString()}`);
  };

  // Generate buttons
  const totalPage = Math.ceil(productsCount / limit);

  const paginationItems = [];
  for (let i = 1; i <= totalPage; i++) {
    paginationItems.push(
      <PaginationItem key={i}>
        <Button
          className={
            page === i
              ? "bg-slate-950 hover:bg-black text-white"
              : "hover:bg-black bg-slate-900 text-white"
          }
          variant="outline"
          type="button"
          onClick={() => handlePagination(i)}
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
            onClick={() => handlePagination(page - 1)}
            className={`${
              page === 1 && "hidden"
            } bg-slate-900 hover:bg-slate-950 cursor-pointer text-white`}
          />
        </PaginationItem>
        {paginationItems}
        <PaginationItem>
          <PaginationNext
            onClick={() => handlePagination(page + 1)}
            className={`${
              page === totalPage && "hidden"
            } bg-slate-900 hover:bg-slate-950 cursor-pointer text-white`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ShopPagination;
