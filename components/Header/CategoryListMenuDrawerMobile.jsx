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
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "../Logo";
import { Separator } from "../ui/separator";
import CategoryListMenu from "../CategoryListMenu";
const allCategories = [
  {
    id: 1,
    name: "Magazine",
  },
  {
    id: 2,
    name: "Science",
  },
  {
    id: 3,
    name: "Arts",
  },
  {
    id: 4,
    name: "Magazine",
  },
  {
    id: 5,
    name: "Science",
  },
  {
    id: 6,
    name: "Arts",
  },
];

const CategoryListMenuDrawerMobile = () => {
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
          <Logo />
          <Separator className="mb-3" />
            <DrawerTitle>Categories</DrawerTitle>
          </DrawerHeader>
          <CategoryListMenu/>
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
