import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "./_components/PageHeader";
import { Button } from "@/components/ui/button";
import { File, PlusCircle } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import ProductTableRow from "./_components/ProductTableRow";

const ProductsListPage = ({ params: { lang } }) => {
  return (
    <div>
      <PageHeader lang={lang} />
      <main className="grid flex-1 items-start gap-4    md:gap-8 mt-4 md:mt-0">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="published" className="hidden sm:flex">Published</TabsTrigger>
              <TabsTrigger value="draft" className="hidden sm:flex">Draft</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                Archived
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-7 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <Link href="/dashboard/add-product">
                <Button size="sm" className="h-7 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <TabsContent value="all">
            <Card>
              <CardHeader  className="px-2">
                <CardTitle>All Products</CardTitle>
              </CardHeader>
              <CardContent className="px-2">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[120px] sm:table-cell">
                        Thumbnail
                      </TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead  className="hidden md:table-cell">Formats</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Stock
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Sold
                      </TableHead>
                      <TableHead  >
                        Feature
                      </TableHead>
                      <TableHead>
                        <span className="sr-only md:not-sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <ProductTableRow />
                    <ProductTableRow />
                    <ProductTableRow />
                    <ProductTableRow />
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ProductsListPage;
