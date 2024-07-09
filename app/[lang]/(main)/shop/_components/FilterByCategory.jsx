"use client";
 
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; 
import { Input } from "@/components/ui/input";

const categories = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
];

 
export function FilterByCategory({ dictionary}) {
  const [isOpen, setIsOpen] = useState(true);
 

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="rounded-lg px-3 py-2 bg-muted text-primary w-full flex justify-between items-center">
        <span>{dictionary?.allCategories}</span>
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
                name={category.id}
                id={category.id}
                // checked={query.includes(category.name)}
                className="cursor-pointer text-themePrimary"
              />
            </span>
            <label
              htmlFor={category.id}
              className=" inline-block cursor-pointer"
            >
              {category.label}
            </label>
            {/* <div className="ml-auto md:text-gray-600 text-sm">
              ({category.productsId.length})
            </div> */}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
 