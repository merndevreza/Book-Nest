
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpecificationTabContent from "./SpecificationTabContent";
import AuthorTabContent from "./AuthorTabContent";

const ProductDetailsTabs = ({dictionary}) => {
   return (
      <Tabs defaultValue="author" className="max-w-2xl">
      <TabsList className="grid w-full grid-cols-2 dark:bg-gray-600">
        <TabsTrigger value="author">{dictionary?.author}</TabsTrigger>
        <TabsTrigger value="specification">{dictionary?.specification}</TabsTrigger> 
      </TabsList>
      <TabsContent value="author">
       <AuthorTabContent/>
      </TabsContent>
      <TabsContent value="specification">
        <SpecificationTabContent  dictionary={dictionary}/>
      </TabsContent>
    </Tabs>
   );
};

export default ProductDetailsTabs;