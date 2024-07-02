import * as React from "react";
import Image from "next/image";

import banner1 from "@/public/assets/images/ads/free-book-nest.png";
import banner2 from "@/public/assets/images/ads/banner-2.png";
import banner3 from "@/public/assets/images/ads/req-a-book.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
const banners = [
  {
    id: crypto.randomUUID(),
    src: banner1, 
    title: "Free Book Nest",
    subtitle:
      "We're building small libraries to support under-resourced communities. You can help them by donating a book.",
    link: "#",
    buttonTitle:"Learn More",
  },
  {
    id: crypto.randomUUID(),
    src: banner2, 
    title: "Upcoming event!",
    subtitle: "Join our upcoming event and discover the Joy of Reading and Learning.",
    buttonTitle:"Book Now",
    link: "#",
  },
  {
    id: crypto.randomUUID(),
    src: banner3, 
    title: "Need Help?",
    subtitle: "If you can't find the book you're looking for, please call our support number or send us a message on WhatsApp.",
    buttonTitle:"Contact Us",
    link: "#",
  },
];

const CTASection = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="container lg:max-w-6xl px-1 sm:px-10 overflow-hidden section-margin"
    >
      <CarouselContent>
        {banners.map((item) => (
          <CarouselItem key={item.id} className="basis-full lg:basis-1/2">
            <div className="h-full rounded-lg overflow-hidden grid grid-cols-2 gap-2 bg-tertiary dark:bg-themeSecondary p-4">
              <div className="flex flex-col col-span-2 sm:col-span-1 justify-center gap-2 sm:gap-3 text-center sm:text-left py-3">
                <h2 className="text-2xl xl:text-3xl font-semibold text-themeSecondary dark:text-themeSecondary-foreground">
                  {item?.title}
                </h2>
                <p className="text-base sm:text-lg text-foreground">{item?.subtitle}</p>
                <Link className="primary-btn self-start mx-auto sm:mr-auto sm:ml-0 " href={item?.link}>{item?.buttonTitle}</Link>
              </div>
              <Image
                className="h-full mx-auto sm:ml-auto object-cover rounded-lg col-span-2 sm:col-span-1 "
                src={item?.src}
                alt={item?.title}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CTASection;
