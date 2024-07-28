import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent, 
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"; 
import { Menu } from "lucide-react";
import Logo from "../Logo";
import { Separator } from "../ui/separator";
import CategoryListMenu from "../CategoryListMenu";
 
const CategoryListMenuDrawerMobile = ({categories,dictionary,lang}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild className="bg-transparent  h-10 w-10 p-2">
        <Button variant="outline" className="border-2 rounded-full h-10 w-10 border-secondary-foreground p-0">
          <Menu size={24} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader> 
          <Logo  lang={lang} className="  w-[120px] mx-auto md:mx-0" logoTextClassName="text-center" />
          <Separator className="mb-3" />
            <DrawerTitle>{dictionary?.allCategories}</DrawerTitle>
          </DrawerHeader>
          <CategoryListMenu categories={categories} lang={lang}/>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryListMenuDrawerMobile;
