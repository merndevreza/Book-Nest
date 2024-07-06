import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpecificationTabContent from "./SpecificationTabContent";
import AuthorTabContent from "./AuthorTabContent";

const ProductDetailsTabs = () => {
   return (
      <Tabs defaultValue="author" className="max-w-2xl">
      <TabsList className="grid w-full grid-cols-2 dark:bg-gray-600">
        <TabsTrigger value="author">Author</TabsTrigger>
        <TabsTrigger value="specification">Specification</TabsTrigger> 
      </TabsList>
      <TabsContent value="author">
       <AuthorTabContent/>
      </TabsContent>
      <TabsContent value="specification">
        <SpecificationTabContent/>
      </TabsContent>
    </Tabs>
   );
};

export default ProductDetailsTabs;