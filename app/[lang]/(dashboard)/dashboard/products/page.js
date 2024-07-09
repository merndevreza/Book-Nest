import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "./_components/PageHeader";
import { Button } from "@/components/ui/button";
import { File, PlusCircle } from "lucide-react";
import AllProductsTabContent from "./_components/AllProductsTabContent";
import Link from "next/link";

const ProductsListPage = ({params:{lang}}) => {
   return (
      <div>
        <PageHeader/>
        <main className="grid flex-1 items-start gap-4    md:gap-8 mt-4 md:mt-0">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
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
            <AllProductsTabContent/>
          </Tabs>
        </main>
      </div>
   );
};

export default ProductsListPage;