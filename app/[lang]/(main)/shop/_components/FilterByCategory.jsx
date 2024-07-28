"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";

export function FilterByCategory({ categoriesResponse, dictionary }) {
  const [isOpen, setIsOpen] = useState(true);
  const categories = categoriesResponse?.data;
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="rounded-lg px-3 py-2 bg-muted text-primary w-full flex justify-between items-center">
        <span>{dictionary?.category}</span>
        <span className="w-7 h-7 border rounded-full flex justify-center items-center">
          {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 pl-3">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center gap-2">
            <span>
              <Input
                type="checkbox"
                name={category?.title}
                value={category?.id}
                id={category?.id}
                // checked={query.includes(category.name)}
                className="cursor-pointer text-themePrimary"
              />
            </span>
            <label
              htmlFor={category.id}
              className=" inline-block cursor-pointer"
            >
              {category?.title}
            </label>
            <div className="ml-auto text-gray-600 dark:text-gray-300 text-sm">
              ({category?.count})
            </div>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
