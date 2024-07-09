"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardGoHomeBtn = ({className,lang}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${lang}`);
  };
  return (
   <Button
   onClick={handleClick}
   variant="outline"
   size="icon"
   className={cn(`ml-auto shrink-0 ${className}`)}
 >
     <Home className="h-5 w-5" />
 </Button>
  );
};

export default DashboardGoHomeBtn; 