import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import getCTAContent from "@/public/static-data/ctaContents";

const CTASection = ({ dictionary, lang }) => {
  const banners =  getCTAContent(dictionary)
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="container lg:max-w-6xl 2xl:max-w-[1400px] px-1 sm:px-10 overflow-hidden section-margin"
    >
      <CarouselContent>
        {banners.map((item) => (
          <CarouselItem key={item.id} className="basis-full lg:basis-1/2">
            <div className="h-full rounded-lg overflow-hidden grid grid-cols-2 gap-2 bg-tertiary dark:bg-themeSecondary p-4">
              <div className="flex flex-col col-span-2 sm:col-span-1 justify-center gap-2 sm:gap-3 text-center sm:text-left py-3">
                <h2 className="text-2xl xl:text-3xl font-semibold text-themeSecondary dark:text-themeSecondary-foreground">
                  {item?.title}
                </h2>
                <p className="text-base  text-foreground">{item?.subtitle}</p>
                <Link
                  href={`/${lang}/${item?.path}`}
                  className="primary-btn self-start mx-auto sm:mx-0 h-11 rounded-md px-8"
                >
                  {item?.buttonTitle}
                </Link>
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
