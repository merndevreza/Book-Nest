import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FilterByAuthor } from "./FilterByAuthor";
import { FilterByCategory } from "./FilterByCategory";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import FilterByPrice from "./FilterByPrice";
import FilterByRating from "./FilterByRating";
import { FilterByFormat } from "./FilterByFormat";

const ShopSidebar = ({ dictionary }) => {
  return (
    <div className="h-auto lg:h-full lg:min-h-screen bg-muted/60 lg:p-5 p-2 w-full mb-6 lg:mb-0">
      <div className="space-y-3 hidden lg:block">
        <FilterByFormat dictionary={dictionary} />
        <FilterByCategory dictionary={dictionary} />
        <FilterByAuthor dictionary={dictionary} />
        <FilterByPrice dictionary={dictionary} />
        <FilterByRating dictionary={dictionary} />
      </div>
      <div className="lg:hidden w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col overflow-y-scroll">
            <span className="font-semibold pl-2">{dictionary?.filter}</span>
            <div className="space-y-3">
              <FilterByFormat dictionary={dictionary} />
              <FilterByCategory dictionary={dictionary} />
              <FilterByAuthor dictionary={dictionary} />
              <FilterByPrice dictionary={dictionary} />
              <FilterByRating dictionary={dictionary} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ShopSidebar;
