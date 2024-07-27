import Book3dView from "@/components/Book3dView/Book3dView";
import ReadBookBtn from "./_components/ReadBookBtn";
import ProductDetails from "./_components/ProductDetails";
import AddToCartWidget from "./_components/AddToCartWidget";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import SocialProfiles from "@/components/SocialProfiles";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BookCard from "@/components/BookCard/BookCard";
import { getDictionary } from "@/app/[lang]/dictionary/dictionary";
import {
  getProductDetails,
  getRelatedProductsByCategory,
} from "@/database/queries/products.queries";
import getBooks from "@/public/static-data/books";
import { getReviewsByProductId } from "@/database/queries/reviews.queries";
const books = getBooks();

const social = {
  facebook: "https://www.facebook.com/",
  twitter: "https://www.twitter.com/",
  linkedIn: "https://www.linkedin.com/in/",
};
const ProductDetailsPage = async ({ params: { lang, productId } }) => {
  const dictionary = await getDictionary(lang);
  const response = await getProductDetails(productId);
  if (!response.success) {
    return <p>Error Occurred: {response?.message}</p>;
  }
  const { id, title, categoryId, price, thumbnail, readingPDF } =
    response?.data;
  const relatedProductsResponse = await getRelatedProductsByCategory(
    categoryId,
    5
  );
  const reviewsResponse = await getReviewsByProductId(productId);
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
              <SocialProfiles links={social} className="md:justify-center" />
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
          {price?.printedNewBook?.regularPrice && (
            <AddToCartWidget
              productId={id}
              price={price?.printedNewBook}
              format="printedNewBook"
              title={dictionary?.printedNewBook}
            />
          )}
          {price?.printedOldBook?.regularPrice && (
            <AddToCartWidget
              productId={id}
              format="printedOldBook"
              price={price?.printedOldBook}
              title={dictionary?.printedOldBook}
            />
          )}
          {price?.ebook?.regularPrice && (
            <AddToCartWidget
              productId={id}
              format="ebook"
              price={price?.ebook}
              title={dictionary?.eBook}
            />
          )}
          {price?.audioBook?.regularPrice && (
            <AddToCartWidget
              productId={id}
              format="audioBook"
              price={price?.audioBook}
              title={dictionary?.audioBook}
            />
          )}
        </div>
      </section>
      {reviewsResponse.success && (reviewsResponse?.data.length > 0) && (
        <section>
          <h4 className="text-lg md:text-xl lg:text-2xl mb-8">
            {dictionary?.customerReviews}
          </h4>
          <ReviewSection response={reviewsResponse} dictionary={dictionary} />
        </section>
      )}

      {relatedProductsResponse?.success === true && (
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
