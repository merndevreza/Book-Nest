import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Upload } from "lucide-react";
const ProductFormatsStyle2 = ({ className, formData, handleChange }) => {
  return (
    <div className={className}>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Printed Books</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="p-0">Format</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className="p-0">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold p-0">Printed New</TableCell>
                <TableCell className="px-2">
                  <Label htmlFor="stock_printedNewBook" className="sr-only">
                    Printed New Book&apos;s Stock
                  </Label>
                  <Input
                    id="stock_printedNewBook"
                    name="stock_printedNewBook"
                    type="number"
                    defaultValue={formData?.stock_printedNewBook}
                    onChange={(e) => handleChange(e)}
                  />
                </TableCell>
                <TableCell className="space-y-2 px-0 py-2">
                  <div>
                    <Label
                      htmlFor="regularPrice_printedNewBook"
                      className="sr-only"
                    >
                      Regular Price (Printed New Book)
                    </Label>
                    <Input
                      id="regularPrice_printedNewBook"
                      name="regularPrice_printedNewBook"
                      placeholder="Regular"
                      type="number"
                      defaultValue={formData?.regularPrice_printedNewBook}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="discountedPrice_printedNewBook"
                      className="sr-only"
                    >
                      Discounted Price (Printed New Book)
                    </Label>
                    <Input
                      id="discountedPrice_printedNewBook"
                      name="discountedPrice_printedNewBook"
                      placeholder="Discounted"
                      type="number"
                      defaultValue={formData?.discountedPrice_printedNewBook}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold p-0">Printed Old</TableCell>

                <TableCell className="px-2">
                  <Label htmlFor="stock_printedOldBook" className="sr-only">
                    Printed Old Book&apos;s Stock
                  </Label>
                  <Input
                    id="stock_printedOldBook"
                    name="stock_printedOldBook"
                    type="number"
                    defaultValue={formData?.stock_printedOldBook}
                    onChange={(e) => handleChange(e)}
                  />
                </TableCell>
                <TableCell className="space-y-2 px-0 py-2">
                  <div>
                    <Label
                      htmlFor="regularPrice_printedOldBook"
                      className="sr-only"
                    >
                      Regular Price (Printed Old Book)
                    </Label>
                    <Input
                      id="regularPrice_printedOldBook"
                      name="regularPrice_printedOldBook"
                      placeholder="Regular"
                      type="number"
                      defaultValue={formData?.regularPrice_printedOldBook}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="discountedPrice_printedOldBook"
                      className="sr-only"
                    >
                      Discounted Price (Printed Old Book)
                    </Label>
                    <Input
                      id="discountedPrice_printedOldBook"
                      name="discountedPrice_printedOldBook"
                      placeholder="Discounted"
                      type="number"
                      defaultValue={formData?.discountedPrice_printedOldBook}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>EBook, Audio Book</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="p-0">Format</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="p-0">Upload</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold p-0">Ebook</TableCell>
                <TableCell className="space-y-2 p-2">
                  <div>
                    <Label htmlFor="regularPrice_ebook" className="sr-only">
                      Regular Price (Printed New Book)
                    </Label>
                    <Input
                      id="regularPrice_ebook"
                      name="regularPrice_ebook"
                      placeholder="Regular"
                      type="number"
                      defaultValue={formData?.regularPrice_ebook}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="discountedPrice_ebook" className="sr-only">
                      Discounted Price (ebook)
                    </Label>
                    <Input
                      id="discountedPrice_ebook"
                      name="discountedPrice_ebook"
                      placeholder="Discounted"
                      type="number"
                      defaultValue={formData?.discountedPrice_ebook}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </TableCell>
                <TableCell className="p-0">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Label
                          htmlFor="upload_ebook"
                          className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed dark:bg-gray-800 cursor-pointer"
                        >
                          <Upload className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Upload ebook</span>
                        </Label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Upload ebook in PDF format</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <Input
                    className="hidden"
                    id="upload_ebook"
                    accept="application/pdf"
                    name="upload_ebook"
                    type="file"
                    defaultValue={formData?.upload_ebook}
                    onChange={(e) => handleChange(e)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold p-0">
                  Audio <br /> Book
                </TableCell>
                <TableCell className="space-y-2 p-2">
                  <div>
                    <Label htmlFor="regularPrice_audioBook" className="sr-only">
                      Regular Price (Audio Book)
                    </Label>
                    <Input
                      id="regularPrice_audioBook"
                      name="regularPrice_audioBook"
                      placeholder="Regular"
                      type="number"
                      defaultValue={formData?.regularPrice_audioBook}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="discountedPrice_audioBook"
                      className="sr-only"
                    >
                      Discounted Price (Audio Book)
                    </Label>
                    <Input
                      id="discountedPrice_audioBook"
                      name="discountedPrice_audioBook"
                      placeholder="Discounted"
                      type="number"
                      defaultValue={formData?.discountedPrice_audioBook}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </TableCell>
                <TableCell className="p-0">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Label
                          htmlFor="upload_audioBook"
                          className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed dark:bg-gray-800 cursor-pointer"
                        >
                          <Upload className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Upload Audio Book</span>
                        </Label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Upload Audio Book in MP3 format</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <Input
                    className="hidden"
                    id="upload_audioBook"
                    name="upload_audioBook"
                    type="file"
                    defaultValue={formData?.upload_audioBook}
                    onChange={(e) => handleChange(e)}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductFormatsStyle2;
