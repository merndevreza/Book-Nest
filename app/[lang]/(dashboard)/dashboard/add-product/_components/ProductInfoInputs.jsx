import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProductInfoInputs = ({ formData, handleChange }) => {
  return (
    <Card x-chunk="dashboard-07-chunk-1">
      <CardHeader>
        <CardTitle>Product Info</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="sku">SKU</Label>
            <Input
              id="sku"
              type="text"
              name="sku"
              className="w-full"
              defaultValue={formData?.sku}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="edition">Edition</Label>
            <Input
              id="edition"
              type="text"
              name="edition"
              className="w-full"
              defaultValue={formData?.edition}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="publisher">Publisher</Label>
            <Input
              id="publisher"
              type="text"
              name="publisher"
              className="w-full"
              defaultValue={formData?.publisher}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="page">Page</Label>
            <Input
              id="page"
              type="text"
              name="page"
              className="w-full"
              defaultValue={formData?.page}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="language">Language</Label>
            <Input
              id="language"
              type="text"
              name="language"
              className="w-full"
              defaultValue={formData?.language}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              type="text"
              name="country"
              className="w-full"
              defaultValue={formData?.country}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductInfoInputs;
