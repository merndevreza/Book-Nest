import BookCard from "@/components/BookCard/BookCard";
import SectionTitle from "@/components/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getFeaturedProducts } from "@/database/queries/products.queries";

const FeaturedBooksSection = async ({ dictionary, lang }) => {
  const response = await getFeaturedProducts(10);
  if (response?.success === false) {
    return null;
  }
  if (response?.data.length < 1) {
    return null;
  }
  const books = response?.data;
  return (
    <section className="section-padding">
      <SectionTitle
        title={dictionary?.featuredSecTitle}
        subTitle={dictionary?.featuredSecSubTitle}
      />
      <Carousel
        opts={{
          align: "start",
        }}
        className=" px-1 sm:px-4 lg:px-8 container "
      >
        <CarouselContent>
          {books?.map((book) => (
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
  );
};

export default FeaturedBooksSection;
