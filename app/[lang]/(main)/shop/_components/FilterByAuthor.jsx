"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";

export function FilterByAuthor({ authorsResponse, dictionary }) {
  const [isOpen, setIsOpen] = useState(true);
  const authors = authorsResponse?.data;
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="rounded-lg px-3 py-2 bg-muted text-primary w-full flex justify-between items-center">
        <span>{dictionary?.author}</span>
        <span className="w-7 h-7 border rounded-full flex justify-center items-center">
          {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 pl-3">
        {authors.map((author) => (
          <div key={author.authorId} className="flex items-center gap-2">
            <span>
              <Input
                type="checkbox"
                name={`${author?.firstName} ${author?.lastName}`}
                value={author.authorId}
                id={author.authorId}
                // checked={query.includes(category.name)}
                className="cursor-pointer "
              />
            </span>
            <label
              htmlFor={author.authorId}
              className=" inline-block cursor-pointer"
            >
              {`${author?.firstName} ${author?.lastName}`}
            </label>
            <div className="ml-auto text-gray-600 dark:text-gray-300 text-sm">
              ({author?.count})
            </div>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
