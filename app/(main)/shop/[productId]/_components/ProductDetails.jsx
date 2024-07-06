import Ratings from "@/components/Ratings";
import {
  Card,
  CardContent,
  CardDescription, 
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductDetailsTabs from "./ProductDetailsTabs";
const ProductDetails = ({book}) => {
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader className="p-0 mb-6 "> 
        <div className="grid grid-cols-5 justify-between items-start gap-4">
        <CardTitle className="dark:text-white col-span-5 xl:col-span-4 leading-normal text-lg md:text-xl lg:text-2xl">{book?.title}</CardTitle>  
          <div className="flex items-center gap-2 min-w-36">
            <Ratings ratingNumber={5} />
            <span className="inline-block">(50)</span>
          </div> 
        </div>
        
          <h2 className="my-2">Author: {book?.authorName}</h2>
          <p>Category: {book?.category}</p>
          <p>Stock: 40</p> 
      </CardHeader>
      <CardContent className="space-y-6 p-0">
        <p>
          Summary: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Officiis magni cumque consequuntur ratione quaerat soluta dolores,
          tempora tenetur, alias aspernatur dolorem labore recusandae,
          perferendis porro facere rem sit asperiores non.
        </p>
        <ProductDetailsTabs />
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
