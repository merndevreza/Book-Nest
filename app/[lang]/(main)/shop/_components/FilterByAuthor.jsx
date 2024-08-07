"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, RefreshCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export function FilterByAuthor({ authors, dictionary }) {
  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  //checkbox handler
  const handleChange = (e) => {
    const id = e.currentTarget.name;
    const isChecked = e.currentTarget.checked;
    if (isChecked) {
      //if checked
      setQuery((prev) => [...prev, id]);
    } else {
      //if unchecked
      const otherIds = query.filter((item) => item !== id);
      setQuery(otherIds);
    }
  };
  //check the url first and update query state
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const ids = params.get("author");
    if (ids) {
      const decodedIds = decodeURI(ids);
      const idsArray = decodedIds.split("|");
      setQuery(idsArray);
    }
  }, [searchParams]);
  //set or delete in the params
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (query.length > 0) {
      params.set("author", encodeURI(query.join("|")));
    } else {
      params.delete("author");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, [query, pathname, router,searchParams]);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex gap-2">
        <CollapsibleTrigger className="rounded-lg px-3 py-2 bg-muted text-primary w-full flex justify-between items-center">
          <span>{dictionary?.author}</span>
          <span className="w-7 h-7 border rounded-full flex justify-center items-center">
            {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </span>
        </CollapsibleTrigger>
        <div>
          <Button disabled={query.length===0} onClick={()=>setQuery([])} variant="secondary" className="w-10 px-2" size="lg">
            <RefreshCcw size={20} />
          </Button>
        </div>
      </div>
      <CollapsibleContent className="mt-3 pl-3">
        {authors.map((author) => (
          <div key={author.id} className="flex items-center gap-2">
            <span>
              <Input
                type="checkbox"
                name={author.id}
                id={author.id}
                checked={query.includes(author.id)}
                onChange={handleChange}
                className="cursor-pointer"
              />
            </span>
            <label htmlFor={author.id} className=" inline-block cursor-pointer">
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
