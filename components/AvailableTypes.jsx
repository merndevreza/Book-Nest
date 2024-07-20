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
            {type === "printedBook" && <Book size={20} />}
            {type === "ebook" && <FileText size={20} />}
            {type === "audioBook" && <FileAudio size={20} />}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Available: {type === "printedBook" && "Printed"}
            {type === "ebook" && "ebook"} {type === "audioBook" && "Audio Book"}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AvailableTypes;
