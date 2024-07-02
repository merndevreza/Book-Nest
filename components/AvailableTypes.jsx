import { Book, FileAudio, FileText } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const AvailableTypes = ({ type }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <span className="h-8 w-8 rounded-full  bg-gray-300 dark:bg-secondary text-themeSecondary dark:text-themeSecondary-foreground flex justify-center items-center cursor-pointer">
              {type === "printed" && <Book size={20} />}
              {type === "pdf" && <FileText size={20} />}
              {type === "audio" && <FileAudio size={20} />}
            </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Available: {type === "printed" && "Printed"}
            {type === "pdf" && "PDF"} {type === "audio" && "Audio Book"}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AvailableTypes;
