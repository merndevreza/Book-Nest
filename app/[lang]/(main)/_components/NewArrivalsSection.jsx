
import BookCard from "@/components/BookCard/BookCard";
import SectionTitle from "@/components/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem, 
} from "@/components/ui/carousel";
import { getLatestProducts } from "@/database/queries/products.queries"; 
 
const NewArrivalsSection = async({dictionary,lang}) => {
  const books= await getLatestProducts(10)
  return (
    <section className="section-padding">
      <SectionTitle
        title={dictionary?.newArrivalSecTitle}
        subTitle={dictionary?.newArrivalSecSubTitle}
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
              <BookCard book={book} dictionary={dictionary} lang={lang}/>
            </CarouselItem>
          ))}
        </CarouselContent> 
      </Carousel>
    </section>
  );
};

export default NewArrivalsSection;
