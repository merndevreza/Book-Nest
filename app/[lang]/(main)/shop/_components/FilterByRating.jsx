"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import Ratings from "@/components/Ratings";
const FilterByRating = ({dictionary}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="rounded-lg px-3 py-2 bg-muted text-primary w-full flex justify-between items-center">
        <span>{dictionary?.rating}</span>
        <span className="w-7 h-7 border rounded-full flex justify-center items-center">
          {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 pl-3">
        <div className="flex items-center gap-2">
          <span>
            <Input
              type="checkbox"
              name="fiveStar"
              id="fiveStar"
              // checked={query.includes(category.name)}
              className="cursor-pointer text-themePrimary"
            />
          </span>
          <label htmlFor="fiveStar" className=" inline-block cursor-pointer">
            <Ratings ratingNumber={5} />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <Input
              type="checkbox"
              name="fiveStar"
              id="fiveStar"
              // checked={query.includes(category.name)}
              className="cursor-pointer text-themePrimary"
            />
          </span>
          <label htmlFor="fiveStar" className=" inline-block cursor-pointer">
            <Ratings ratingNumber={4} />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <Input
              type="checkbox"
              name="fiveStar"
              id="fiveStar"
              // checked={query.includes(category.name)}
              className="cursor-pointer text-themePrimary"
            />
          </span>
          <label htmlFor="fiveStar" className=" inline-block cursor-pointer">
            <Ratings ratingNumber={3} />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <Input
              type="checkbox"
              name="fiveStar"
              id="fiveStar"
              // checked={query.includes(category.name)}
              className="cursor-pointer text-themePrimary"
            />
          </span>
          <label htmlFor="fiveStar" className=" inline-block cursor-pointer">
            <Ratings ratingNumber={2} />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <Input
              type="checkbox"
              name="fiveStar"
              id="fiveStar"
              // checked={query.includes(category.name)}
              className="cursor-pointer text-themePrimary"
            />
          </span>
          <label htmlFor="fiveStar" className=" inline-block cursor-pointer">
            <Ratings ratingNumber={1} />
          </label>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterByRating;
