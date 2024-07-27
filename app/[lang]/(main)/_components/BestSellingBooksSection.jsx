import BookCard from "@/components/BookCard/BookCard";

import SectionTitle from "@/components/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getBestSellingProducts } from "@/database/queries/products.queries";

const BestSellingBooksSection = async ({ dictionary, lang }) => {
  const books = await getBestSellingProducts(10);
  return (
    <>
      {books?.data.length > 0 && (
        <section className="section-padding">
          <SectionTitle
            title={dictionary?.bestSellingSecTitle}
            subTitle={dictionary?.bestSellingSecSubTitle}
          />
          <Carousel
            opts={{
              align: "start",
            }}
            className=" px-1 sm:px-4 lg:px-8 container "
          >
            <CarouselContent>
              {books?.data.map((book) => (
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
    </>
  );
};

export default BestSellingBooksSection;
