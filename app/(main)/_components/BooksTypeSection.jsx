"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import printedBooks from "@/public/assets/images/book-types/printed-book-front.png";
import ebooks from "@/public/assets/images/book-types/ebook-front.png";
import audioBooks from "@/public/assets/images/book-types/audiobook-front.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const bookTypes = [
  {
    id: 1,
    title: "Printed Books",
    subTitle:
      "We have a large collection of books in printed hard copy format.",
    thumbnail: printedBooks,
    link: "/",
  },
  {
    id: 2,
    title: "E-Books",
    subTitle: "We have the largest collection of digital books in PDF format.",
    thumbnail: ebooks,
    link: "/",
  },
  {
    id: 3,
    title: "Audio Books",
    subTitle: "We have a large collection of audio books in mp3 format.",
    thumbnail: audioBooks,
    link: "/",
  },
];
const BooksTypeSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className=" px-1 sm:px-4 lg:px-8 container section-padding">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {bookTypes.map((type) => (
            <CarouselItem key={type?.id} className="md:basis-1/2 lg:basis-1/3 ">
              <Card>
                <CardContent className="grid grid-cols-5 gap-4 items-center justify-center p-3">
                  <div className="col-span-2">
                    <Image
                      className="rounded translate-y-0 hover:-translate-y-1 transition duration-300 ease-in"
                      src={type?.thumbnail}
                      alt={type?.title}
                    />
                  </div>
                  <div className="col-span-3 space-y-2">
                    <h3 className="text-xl font-semibold text-themePrimary">
                      {type?.title}
                    </h3>
                    <p>{type?.subTitle}</p>
                    <Button variant="themePrimary">Explore Books</Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default BooksTypeSection;
