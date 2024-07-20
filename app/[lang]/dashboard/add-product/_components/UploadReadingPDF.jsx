import { Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const UploadReadingPDF = ({formData,handleChange}) => {
  return (
    <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <CardTitle>Reading PDF</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div>
            <Label
              htmlFor="readingPDF"
              className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed dark:bg-gray-800 cursor-pointer max-w-[100px] mb-4"
            >
              <Upload className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Upload PDF for Reading</span>
            </Label>
            <Input 
              id="readingPDF"
              name="readingPDF"
              type="file"
              defaultValue={formData?.readingPDF}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 
export default UploadReadingPDF;