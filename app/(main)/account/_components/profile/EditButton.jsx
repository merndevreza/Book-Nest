import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";

const EditButton = ({ className }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(`ml-auto shrink-0 ${className}`)}
    >
      <Pencil className="h-4 w-4" />
      <span className="sr-only">Edit Button</span>
    </Button>
  );
};

export default EditButton;
