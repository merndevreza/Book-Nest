import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ProductDetailsInputs = ({ formData, handleChange }) => {
  return (
    <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              name="title"
              defaultValue={formData?.title}
              onChange={(e) => handleChange(e)}
              className="w-full"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="shortDescription">Short Description</Label>
            <Textarea
              id="shortDescription"
              name="shortDescription"
              className="min-h-32"
              defaultValue={formData?.shortDescription}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDetailsInputs;
