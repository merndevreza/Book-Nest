import BookCard from "@/components/BookCard";
import SectionTitle from "@/components/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem, 
} from "@/components/ui/carousel";

import book1Front from "@/public/assets/images/books/img-01.jpg";
import book1Back from "@/public/assets/images/books/img-02.jpg";
import book2Front from "@/public/assets/images/books/img-03.jpg";
import book2Back from "@/public/assets/images/books/img-04.jpg";
const books = [
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    thumbnail: book1Front,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 4,
    types: ["printed", "pdf", "audio"],
  },
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    thumbnail: book2Front,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: null,
    rating: 4,
    types: ["printed", "audio"],
  },
  {
    id: crypto.randomUUID(),
    title: "ইংলিশে দুর্বলদের জন্য English Therapy",
    thumbnail: book1Back,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 3,
    types: ["printed", "pdf"],
  },
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    thumbnail: book2Back,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 4,
    types: ["pdf", "audio"],
  },
  {
    id: crypto.randomUUID(),
    title: "জার্মান ব্যাকরণ A1 থেকে B1 ( বাংলা ভার্সন )",
    thumbnail: book1Back,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 5,
    types: ["printed"],
  },
];
const NewArrivalsSection = () => {
  return (
    <section className="section-padding">
      <SectionTitle
        title="New Arrivals"
        subTitle="Get all popular books in printed format"
      />
      <Carousel 
      opts={{
        align: "start",
      }}
      className=" px-1 sm:px-4 lg:px-8 container "
      >
        <CarouselContent>
          {books.map((book) => (
            <CarouselItem
              key={book.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <BookCard book={book} />
            </CarouselItem>
          ))}
        </CarouselContent> 
      </Carousel>
    </section>
  );
};

export default NewArrivalsSection;
