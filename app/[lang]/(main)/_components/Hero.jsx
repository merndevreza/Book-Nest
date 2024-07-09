"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import banner1 from "@/public/assets/images/banners/banner-1.png";
import banner2 from "@/public/assets/images/banners/banner-3.png";
import banner3 from "@/public/assets/images/banners/banner-2.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const Hero = ({ dictionary, lang }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (window.screen.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  
  const banners = [
    {
      id: crypto.randomUUID(),
      src: banner1,
      title: dictionary?.slide1Title,
      subtitle: dictionary?.slide1SubTitle,
      path: "shop",
    },
    {
      id: crypto.randomUUID(),
      src: banner2,
      title: dictionary?.slide2Title,
      subtitle: dictionary?.slide2SubTitle,
      path: "shop",
    },
    {
      id: crypto.randomUUID(),
      src: banner3,
      title: dictionary?.slide3Title,
      subtitle: dictionary?.slide3SubTitle,
      path: "shop",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
      className="w-full sm:max-w-[90%] 2xl:max-w-[1400px] px-1 sm:px-4 lg:px-8 container overflow-hidden section-margin"
    >
      <CarouselContent className="h-[450px] sm:h-[300px] lg:h-[400px]">
        {banners.map((item) => (
          <CarouselItem key={item.id}>
            <div className="h-full rounded-lg overflow-hidden grid grid-cols-3 bg-tertiary dark:bg-themeSecondary">
              <Image
                className="h-[280px] lg:h-[380px] mx-auto sm:mr-auto mt-auto object-contain order-2 sm:order-1 col-span-3 sm:col-span-1"
                src={item.src}
                alt={item.title}
              />
              <div className="col-span-3 sm:col-span-2 flex flex-col justify-center gap-2 sm:gap-3 order-1 sm:order-2 p-5 pt-8 md:p-0 text-center sm:text-left">
                <h2 className="text-2xl md:text-4xl xl:text-5xl font-semibold text-themeSecondary dark:text-themeSecondary-foreground">
                  {item.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl">
                  {item.subtitle}
                </p>
                <Link
                  href={`/${lang}/${item?.path}`}
                  className="primary-btn self-start mx-auto sm:mx-0 h-11 rounded-md px-8"
                >
                  {dictionary?.explore}
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {!isMobile && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};

export default Hero;