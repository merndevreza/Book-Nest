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

const formats = [
  {
    name: "printedBook",
    label: "Printed Books",
  },
  {
    name: "ebook",
    label: "E-Books",
  },
  {
    name: "audioBook",
    label: "Audio Books",
  },
];

export function FilterByFormat({ dictionary }) {
  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);

  //checkbox handler
  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const isChecked = e.currentTarget.checked;
    if (isChecked) {
      //if checked
      setQuery((prev) => [...prev, name]);
    } else {
      //if unchecked
      const otherNames = query.filter((item) => item !== name);
      setQuery(otherNames);
    }
  };
  //Check query if already in the params
  useEffect(() => {
    const formats = params.get("format");
    if (formats) {
      const decodedFormats = decodeURI(formats);
      const formatsArray = decodedFormats.split("|");
      setQuery(formatsArray);
    }
  }, []);
  //set or delete query
  useEffect(() => {
    if (query.length > 0) {
      params.set("format", encodeURI(query.join("|")));
    } else {
      params.delete("format");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, [query, pathname, router]);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex gap-2">
        <CollapsibleTrigger className="rounded-lg px-3 py-2 bg-muted text-primary w-full flex justify-between items-center">
          <span>{dictionary?.format}</span>
          <span className="w-7 h-7 border rounded-full flex justify-center items-center">
            {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </span>
        </CollapsibleTrigger>
        <div>
          <Button variant="secondary" onClick={()=>setQuery([])}  disabled={query.length===0}  className="w-10 px-2" size="lg">
            <RefreshCcw size={20} />
          </Button>
        </div>
      </div>

      <CollapsibleContent className="mt-3 pl-3">
        {formats.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span>
              <Input
                type="checkbox"
                name={item.name}
                id={item.name}
                checked={query.includes(item.name)}
                onChange={handleChange}
                className="cursor-pointer text-themePrimary"
              />
            </span>
            <label htmlFor={item.name} className=" inline-block cursor-pointer">
              {item.label}
            </label>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
