"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const DashboardSearchToggler = ({ className }) => {
  const handleClick = () => {
    console.log("Open a modal with search filed");
  };
  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="icon"
      className={cn(`ml-auto shrink-0 ${className}`)}
    >
      <Search className="h-5 w-5" />
    </Button>
  );
};

export default DashboardSearchToggler;
