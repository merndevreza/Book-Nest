import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SelectAuthor = ({formData,handleChange}) => {
  return (
    <Card x-chunk="dashboard-07-chunk-2">
      <CardHeader>
        <CardTitle>Author</CardTitle>
      </CardHeader>
      <CardContent>
        <div >
          <div className="grid gap-3">
            <Label htmlFor="author" className="sr-only">author</Label>
            <Select>
              <SelectTrigger id="author" aria-label="Select Author">
                <SelectValue placeholder="Select Author" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div> 
        </div>
      </CardContent>
    </Card>
  );
};

export default SelectAuthor;

 