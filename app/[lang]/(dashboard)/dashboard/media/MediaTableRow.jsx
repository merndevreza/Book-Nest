
import { TableCell, TableRow } from "@/components/ui/table";
import getFormattedDate from "@/utils/getFormatedDate";
import { FileText } from "lucide-react";
import Image from "next/image";
import DeleteMediaBtn from "./DeleteMediaBtn";

const MediaTableRow = ({ media }) => {
  return (
    <TableRow>
      <TableCell>
        {media?.pathname.includes(".png") ||
        media?.pathname.includes(".jpg") ||
        media?.pathname.includes(".jpeg") ||
        media?.pathname.includes(".webp") ||
        media?.pathname.includes(".svg") ? (
          <Image
            className="aspect-square rounded-md object-cover"
            src={media?.url}
            alt={media?.pathname}
            width="64"
            height="64"
          />
        ) : (
          <FileText />
        )}
      </TableCell>
      <TableCell className="font-medium">{media?.pathname}</TableCell>
      <TableCell className="hidden lg:table-cell max-w-56">{media?.url}</TableCell>
      <TableCell className="hidden lg:table-cell">{getFormattedDate(media?.uploadedAt)}</TableCell>
      <TableCell>
        <DeleteMediaBtn url={media?.url}/>
      </TableCell>
    </TableRow>
  );
};

export default MediaTableRow;
