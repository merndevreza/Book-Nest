import Book3dView from "@/components/Book3dView/Book3dView";
import ReadBookBtn from "./_components/ReadBookBtn";
import ProductDetails from "./_components/ProductDetails";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BookCard from "@/components/BookCard/BookCard";
import { getDictionary } from "@/app/[lang]/dictionary/dictionary";
import SocialShare from "@/components/SocialShare";
import ProductPrices from "./_components/ProductPrices";
import { getProductDetails } from "@/database/queries/products.queries";
import { getProductsByCategory } from "@/database/queries/categories.queries";
import { getReviewsByProductId } from "@/database/queries/reviews.queries";

const ProductDetailsPage = async ({ params: { lang, productId } }) => {
  const dictionary = await getDictionary(lang);

  const response = await getProductDetails(productId);
  if (response.success === false) {
    return <p>Error Occurred: {response?.message}</p>;
  }
  const { id, title, category, price, thumbnail, readingPDF } = response?.data;
  const relatedProductsResponse = await getProductsByCategory(
    category?.details.toString(),
    10
  );
  const reviewsResponse = await getReviewsByProductId(id);
  return (
    <main className="container px-1 sm:px-4 lg:px-8  py-4 lg:py-12 space-y-16">
      <section className="grid grid-cols-4 gap-6">
        <div className="col-span-4 lg:col-span-3 grid grid-cols-3 justify-center gap-4 xl:gap-0  bg-tertiary dark:bg-muted p-4 lg:p-7 rounded">
          <div className="space-y-3 col-span-3 md:col-span-1">
            <Book3dView bookImg={thumbnail} bookAlt={title} />
            <div className="text-center pt-6">
              <ReadBookBtn readingPDF={readingPDF} dictionary={dictionary} />
            </div>
            <div className="pt-6 flex gap-2 justify-center">
              <span>Share:</span>{" "}
              <SocialShare
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/shop/${id}`}
                quote={title}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2">
            <ProductDetails
              book={response?.data}
              dictionary={dictionary}
              reviewsResponse={reviewsResponse}
            />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 self-start gap-3">
          <ProductPrices price={price} id={id} dictionary={dictionary} />
        </div>
      </section>
      {reviewsResponse.success && reviewsResponse?.data.length > 0 && (
        <section>
          <h4 className="text-lg md:text-xl lg:text-2xl mb-8">
            {dictionary?.customerReviews}
          </h4>
          <ReviewSection response={reviewsResponse} dictionary={dictionary} />
        </section>
      )}

      {relatedProductsResponse?.success === true &&
        relatedProductsResponse?.data?.length > 0 && (
          <section className="section-padding">
            <h4 className="text-lg md:text-xl lg:text-2xl mb-8">
              {dictionary?.recommendedProductsTitle}
            </h4>
            <Carousel
              opts={{
                align: "start",
              }}
            >
              <CarouselContent>
                {relatedProductsResponse?.data.map((book) => (
                  <CarouselItem
                    key={book.id}
                    className="sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                  >
                    <BookCard book={book} dictionary={dictionary} lang={lang} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </section>
        )}
    </main>
  );
};

export default ProductDetailsPage;
