import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MediaTableRow from "./MediaTableRow";
import { list } from "@vercel/blob";
const MediaTable = async () => {
  const { blobs } = await list(); 
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">
            Preview
          </TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="hidden lg:table-cell">Url</TableHead>
          <TableHead  className="hidden lg:table-cell">Uploaded At</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blobs.length > 0 ? (
          blobs.map((media) => <MediaTableRow key={media?.url} media={media} />)
        ) : (
          <p>No Media Available</p>
        )}
      </TableBody>
    </Table>
  );
};

export default MediaTable;
