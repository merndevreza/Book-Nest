"use client";
 
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; 
import { Input } from "@/components/ui/input";

const formats = [
  {
    id: "printedBook",
    label: "Printed Books",
  },
  {
    id: "ebook",
    label: "E-Books",
  },
  {
    id: "audioBook",
    label: "Audio Books",
  }, 
];

 
export function FilterByFormat({ dictionary}) {
  const [isOpen, setIsOpen] = useState(true);
 
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="rounded-lg px-3 py-2 bg-muted text-primary w-full flex justify-between items-center">
        <span>{dictionary?.format}</span>
        <span className="w-7 h-7 border rounded-full flex justify-center items-center">
          {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 pl-3">
        {formats.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <span>
              <Input
                type="checkbox"
                name={item.id}
                id={item.id}
                // checked={query.includes(item.name)}
                className="cursor-pointer text-themePrimary"
              />
            </span>
            <label
              htmlFor={item.id}
              className=" inline-block cursor-pointer"
            >
              {item.label}
            </label>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
} 