"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import book1Front from "@/public/assets/images/books/img-01.jpg";
import book1Back from "@/public/assets/images/books/img-02.jpg";
import book2Front from "@/public/assets/images/books/img-03.jpg";
import book2Back from "@/public/assets/images/books/img-04.jpg";
import book3Front from "@/public/assets/images/books/img-05.jpg";
import book3Back from "@/public/assets/images/books/img-02.jpg";
import CardWithFlipImg from "@/components/CardWithFlipImg";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const bookTypes = [
  {
    id: 1,
    title: "Printed Books",
    subTitle:
      "We have a large collection of books in printed hard copy format.",
    frontImg: book1Front,
    frontImgAlt: "Printed Books Collection",
    backImg: book1Back,
    backImgAlt: "Printed Books Collection",
    link: "/",
  },
  {
    id: 2,
    title: "PDF Books",
    subTitle: "We have the largest collection of digital books in PDF format.",
    frontImg: book2Front,
    frontImgAlt: "PDF Books Collection",
    backImg: book2Back,
    backImgAlt: "PDF Books Collection",
    link: "/",
  },
  {
    id: 3,
    title: "Audio Books",
    subTitle: "We have a large collection of audio books in mp3 format.",
    frontImg: book3Front,
    frontImgAlt: "Audio Books Collection",
    backImg: book3Back,
    backImgAlt: "Audio Books Collection",
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
            <CarouselItem key={type.id} className="md:basis-1/2 lg:basis-1/3 ">
              <CardWithFlipImg
                frontImage={type.frontImg}
                backImage={type.backImg}
                frontImageAlt={type.frontImgAlt}
                backImageAlt={type.backImgAlt}
              >
                <>
                  <h3 className="text-xl font-semibold text-themePrimary mb-2">
                    {type.title}
                  </h3>
                  <p className=" mb-5 ">{type.subTitle}</p>
                  <Button variant="primary">Explore Books</Button>
                </>
              </CardWithFlipImg>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default BooksTypeSection;
