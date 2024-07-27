
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductDetailsTabs from "./ProductDetailsTabs";
import AverageRating from "@/components/AverageRating";
const ProductDetails = ({ reviewsResponse, book, dictionary }) => {
  const {
    title,
    stock,
    formats,
    edition,
    publisher,
    page,
    language,
    country,
    price,
    authorId,
    shortDescription,
    status,
    readingPDF,
    categoryId,
  } = book;
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader className="p-0 space-y-6 mb-6">
        <div className="grid grid-cols-5 justify-between items-start gap-4">
          <CardTitle className="dark:text-white col-span-5 xl:col-span-4 leading-normal text-lg md:text-xl lg:text-2xl">
            {title}
          </CardTitle>
          {reviewsResponse.success === true && <AverageRating reviews={reviewsResponse?.data} showTotalReviews={true}/>}
        </div>
        <div>
          <h2>
            {dictionary?.author}:{" "}
            {`${authorId?.userId?.firstName} ${authorId?.userId?.lastName}`}
          </h2>
          <p>
            {dictionary?.category}: {categoryId?.title}
          </p>
          <p>
            {dictionary?.stock}:{stock}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 p-0">
        <p>{shortDescription}</p>
        <ProductDetailsTabs book={book} dictionary={dictionary} />
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
