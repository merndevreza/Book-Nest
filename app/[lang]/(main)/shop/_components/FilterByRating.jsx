"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, RefreshCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import Ratings from "@/components/Ratings";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
const FilterByRating = ({ dictionary }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  //checkbox handler
  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const isChecked = e.currentTarget.checked;
    if (isChecked) {
      // if checked
      setQuery((prev) => [...prev, name]);
    } else {
      //if unchecked
      const otherNames = query.filter((item) => item !== name);
      setQuery(otherNames);
    }
  };
  //check the url first and update query state
  useEffect(() => {
    const ratings = params.get("rating");
    if (ratings) {
      const decodedRatings = decodeURI(ratings);
      const ratingsArray = decodedRatings.split("|");
      setQuery(ratingsArray);
    }
  }, []);
  //set or delete in params
  useEffect(() => {
    if (query.length > 0) {
      params.set("rating", encodeURI(query.join("|")));
    } else {
      params.delete("rating");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, [query, pathname, router]);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex gap-2">
        <CollapsibleTrigger className="rounded-lg px-3 py-2 bg-muted text-primary w-full flex justify-between items-center">
          <span>{dictionary?.rating}</span>
          <span className="w-7 h-7 border rounded-full flex justify-center items-center">
            {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </span>
        </CollapsibleTrigger>
        <div>
          <Button variant="secondary" onClick={()=>setQuery([])}   disabled={query.length===0} className="w-10 px-2" size="lg">
            <RefreshCcw size={20} />
          </Button>
        </div>
      </div>

      <CollapsibleContent className="mt-3 pl-3">
        <div className="flex items-center gap-2">
          <span>
            <Input
              type="checkbox"
              name="5"
              id="5"
              checked={query.includes("5")}
              onChange={handleChange}
              className="cursor-pointer text-themePrimary"
            />
          </span>
          <label htmlFor="5" className=" inline-block cursor-pointer">
            <Ratings ratingNumber={5} />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <Input
              type="checkbox"
              name="4"
              id="4"
              checked={query.includes("4")}
              onChange={handleChange}
              className="cursor-pointer text-themePrimary"
            />
          </span>
          <label htmlFor="4" className=" inline-block cursor-pointer">
            <Ratings ratingNumber={4} />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <Input
              type="checkbox"
              name="3"
              id="3"
              checked={query.includes("3")}
              onChange={handleChange}
              className="cursor-pointer text-themePrimary"
            />
          </span>
          <label htmlFor="3" className=" inline-block cursor-pointer">
            <Ratings ratingNumber={3} />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <Input
              type="checkbox"
              name="2"
              id="2"
              checked={query.includes("2")}
              onChange={handleChange}
              className="cursor-pointer text-themePrimary"
            />
          </span>
          <label htmlFor="2" className=" inline-block cursor-pointer">
            <Ratings ratingNumber={2} />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <Input
              type="checkbox"
              name="1"
              id="1"
              checked={query.includes("1")}
              onChange={handleChange}
              className="cursor-pointer text-themePrimary"
            />
          </span>
          <label htmlFor="1" className=" inline-block cursor-pointer">
            <Ratings ratingNumber={1} />
          </label>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterByRating;
