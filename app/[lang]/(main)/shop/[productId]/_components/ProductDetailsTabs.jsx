
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpecificationTabContent from "./SpecificationTabContent";
import AuthorTabContent from "./AuthorTabContent";

const ProductDetailsTabs = ({book,dictionary}) => {
   return (
      <Tabs defaultValue="author" className="max-w-2xl">
      <TabsList className="grid w-full grid-cols-2 dark:bg-gray-600">
        <TabsTrigger value="author">{dictionary?.author}</TabsTrigger>
        <TabsTrigger value="specification">{dictionary?.specification}</TabsTrigger> 
      </TabsList>
      <TabsContent value="author">
       <AuthorTabContent author={book?.authorId}/>
      </TabsContent>
      <TabsContent value="specification">
        <SpecificationTabContent book={book}  dictionary={dictionary}/>
      </TabsContent>
    </Tabs>
   );
};

export default ProductDetailsTabs;