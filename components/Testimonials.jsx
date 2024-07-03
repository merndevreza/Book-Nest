import Image from "next/image";
import Ratings from "./Ratings";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import book1Front from "@/public/assets/images/books/img-01.jpg";
import user1 from "@/public/assets/images/user-1.jpg";
import Book3dView from "./Book3dView/Book3dView";

const testimonials = [
  {
    id: crypto.randomUUID(),
    review:
      "Adventures in the Kitchen is an absolute culinary masterpiece. The author descriptions transport you into a world of delectable flavors and fragrant aromas. This book is not just  a collection of recipes; Whether you are an experienced chef or a kitchen newbie, this book will ignite your passion for cooking and leave you hungry for more. A must-read for food enthusiasts and storytellers alike!",
    bookThumbnail: book1Front,
    bookTitle: "Green village",
    author: "Rezaul Kairm",
    authorId: crypto.randomUUID(),
    rating: 4,
    userId: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    review:
      "Adventures in the Kitchen is an absolute culinary masterpiece. The author descriptions transport you into a world of delectable flavors and fragrant aromas. This book is not just  a collection of recipes; Whether you are an experienced chef or a kitchen newbie, this book will ignite your passion for cooking and leave you hungry for more. A must-read for food enthusiasts and storytellers alike!",
    bookThumbnail: book1Front,
    bookTitle: "Green village",
    author: "Rezaul Kairm",
    authorId: crypto.randomUUID(),
    rating: 4,
    userId: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    review:
      "Adventures in the Kitchen is an absolute culinary masterpiece. The author descriptions transport you into a world of delectable flavors and fragrant aromas. This book is not just  a collection of recipes; Whether you are an experienced chef or a kitchen newbie, this book will ignite your passion for cooking and leave you hungry for more. A must-read for food enthusiasts and storytellers alike!",
    bookThumbnail: book1Front,
    bookTitle: "Green village",
    author: "Rezaul Kairm",
    authorId: crypto.randomUUID(),
    rating: 4,
    userId: crypto.randomUUID(),
  },
];
const Testimonials = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="container lg:max-w-5xl px-1 sm:px-10"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id}>
            <div className="flex flex-col sm:flex-row p-4 pt-8 md:p-8 gap-8 rounded-md  bg-[#f7f7f7] dark:bg-secondary">
              <div className="flex justify-center items-center">
                <Book3dView bookImg={testimonial?.bookThumbnail} bookAlt={testimonial?.bookTitle}/>
              </div>
              <div className="flex flex-col justify-center w-full">
                <div>
                  <div className="flex justify-between ">
                    <h2 className="text-xl mb-3 md:text-3xl text-themePrimary dark:text-white">
                      {testimonial?.bookTitle}
                    </h2>
                    <div className="text-xl">
                      <Ratings ratingNumber={testimonial?.rating}></Ratings>
                    </div>
                  </div>
                  <p className="capitalize font-bold text-xl dark:text-white -mt-2">
                    By: {testimonial?.author}
                  </p>
                </div>
                <div className="mt-8 bg-tertiary text-tertiary-foreground  p-5 rounded-lg ">
                  <div>
                    <Image
                      className="w-[70px] rounded-full h-[70px] object-cover"
                      src={user1}
                      alt="User"
                    />
                  </div>
                  <p className="text-lg font-bold  mt-1">
                    Sakib Al Hasan
                  </p>
                  <p className="text-base font-bold  mt-4 text-foreground">
                    {testimonial?.review}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="hidden md:inline-flex right-0 xl:-right-8"/>
      <CarouselPrevious className="hidden md:inline-flex left-0 xl:-left-8"/>
    </Carousel>
  );
};

export default Testimonials;
