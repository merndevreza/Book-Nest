"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import MenuLinks from "./MenuLinks";

const MenuWidget = ({
  menu,
  vertical,
  menuTitle,
  footerMenu,
  lang,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible className={className} open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="rounded-lg px-3 py-1 bg-gray-900 text-primary w-full flex justify-between items-center">
        <span>
          {menuTitle && (
            <>
              <h4 className="text-base md:text-lg font-semibold py-1">
                {menuTitle}
              </h4>
            </>
          )}
        </span>
        <span className="w-7 h-7 flex justify-center items-center">
          {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 pl-3">
        <MenuLinks menu={menu} vertical={vertical} footerMenu={footerMenu} lang={lang}/>
      </CollapsibleContent>
    </Collapsible>
  );
};
export default MenuWidget;
