import Image from "next/image";
import { Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const UploadThumbnail = ({ formData, handleChange }) => {
  return (
    <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <CardTitle>Product Thumbnail</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt="Product image"
            className="max-w-[200px]"
            height="300"
            src="/placeholder.svg"
            width="200"
          />
          <div className="max-w-[100px]">
            <Label
              htmlFor="thumbnail"
              className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed dark:bg-gray-800 cursor-pointer"
            >
              <Upload className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Upload Thumbnail</span>
            </Label>
            <Input
              className="hidden"
              id="thumbnail"
              name="thumbnail"
              type="file"
              defaultValue={formData?.thumbnail}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
 

export default UploadThumbnail;