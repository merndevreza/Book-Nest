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

export function FilterByCategory({ categories, dictionary }) {
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
      //If checked
      setQuery((prev) => [...prev, id]);
    } else {
      // if unChecked
      const otherIds = query.filter((item) => item !== id);
      setQuery(otherIds);
    }
  };
  //check the url first and update query state
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const categories = params.get("category");
    if (categories) {
      const decodedCategories = decodeURI(categories);
      const categoriesArray = decodedCategories.split("|");
      setQuery(categoriesArray);
    }
  }, [searchParams]);
  //set or delete query in the search params
  useEffect(() => { 
    const params = new URLSearchParams(searchParams.toString());
    if (query.length > 0) {
      params.set("category", encodeURI(query.join("|")));
    } else {
      params.delete("category");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, [query, pathname, router,searchParams]);
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex gap-2">
      <CollapsibleTrigger className="rounded-lg px-3 py-2 bg-muted text-primary w-full flex justify-between items-center">
        <span>{dictionary?.category}</span>
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
        {categories.map((category) => (
          <div key={category.id} className="flex items-center gap-2">
            <span>
              <Input
                type="checkbox"
                name={category?.id}
                id={category?.id}
                checked={query.includes(category?.id)}
                onChange={handleChange}
                className="cursor-pointer text-themePrimary"
              />
            </span>
            <label
              htmlFor={category.id}
              className=" inline-block cursor-pointer"
            >
              {category?.name}
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
