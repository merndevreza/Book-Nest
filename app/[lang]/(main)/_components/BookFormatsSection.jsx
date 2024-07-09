import * as React from "react"; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import getBookFormatsContent from "@/public/static-data/bookFormats";

const BookFormatsSection = ({ dictionary, lang }) => {
  const bookTypes =  getBookFormatsContent(dictionary)
  return (
    <section className=" px-1 sm:px-4 lg:px-8 container section-padding">
      <Carousel
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
                    <Link
                      href={`/${lang}/${type?.path}`}
                      className="primary-btn self-start mx-auto sm:mx-0 h-9 rounded-md px-3"
                    >
                      {dictionary?.exploreBooks}
                    </Link>
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

export default BookFormatsSection;
 