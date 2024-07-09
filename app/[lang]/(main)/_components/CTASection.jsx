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

const CTASection = ({ dictionary, lang }) => {
  const banners = [
    {
      id: crypto.randomUUID(),
      src: banner1,
      title: dictionary?.ctaBanner1Title,
      subtitle: dictionary?.ctaBanner1SubTitle,
      path: "shop",
      buttonTitle: dictionary?.learnMore,
    },
    {
      id: crypto.randomUUID(),
      src: banner2,
      title: dictionary?.ctaBanner2Title,
      subtitle: dictionary?.ctaBanner2SubTitle,
      buttonTitle: dictionary?.bookNow,
      path: "shop",
    },
    {
      id: crypto.randomUUID(),
      src: banner3,
      title: dictionary?.ctaBanner3Title,
      subtitle: dictionary?.ctaBanner3SubTitle,
      buttonTitle: dictionary?.contactUs,
      path: "shop",
    },
  ];
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
