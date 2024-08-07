"use client";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, RefreshCcw } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByPrice = ({ dictionary }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState({
    min: "",
    max: "",
  });

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
 
  //input change handler
  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  //check the url first and update query state
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const minPrice = params.get("min");
    const maxPrice = params.get("max");

    if (minPrice && maxPrice) {
      setQuery({ min: minPrice, max: maxPrice });
    }
  }, [searchParams]);

  //set or delete in the params
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (query.min && query.max) {
      params.set("min", query.min);
      params.set("max", query.max);
    } else {
      params.delete("min");
      params.delete("max");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, [query, pathname, router,searchParams]);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex gap-2">
        <CollapsibleTrigger className="rounded-lg px-3 py-2 bg-muted text-primary w-full flex justify-between items-center">
          <span>{dictionary?.price}</span>
          <span className="w-7 h-7 border rounded-full flex justify-center items-center">
            {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </span>
        </CollapsibleTrigger>
        <div>
          <Button
            variant="secondary"
            disabled={query.min==="" || query.max==="" } 
            onClick={() =>
              setQuery({
                min: "",
                max: "",
              })
            }
            className="w-10 px-2"
            size="lg"
          >
            <RefreshCcw size={20} />
          </Button>
        </div>
      </div>

      <CollapsibleContent className="mt-3 pl-3">
        <div className="mt-4 flex items-center">
          <input
            type="number"
            name="min"
            id="min"
            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
            placeholder="min"
            value={query.min}
            onChange={handleChange}
          />
          <span className="mx-3 text-gray-500">-</span>
          <input
            type="number"
            name="max"
            id="max"
            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
            placeholder="max"
            value={query.max}
            onChange={handleChange}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterByPrice;
