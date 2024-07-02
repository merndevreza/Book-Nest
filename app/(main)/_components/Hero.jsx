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
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const banners = [
  {
    id: crypto.randomUUID(),
    src: banner1,
    alt: "Ghost Book",
    title: "Welcome to BookNest",
    subtitle: "Discover a World of Books, E-books, and Audiobooks",
    link: "/shop",
  },
  {
    id: crypto.randomUUID(),
    src: banner2,
    alt: "Fresh Reads Just In!",
    title: "Fresh Reads Just In!",
    subtitle: "Explore the Latest Additions to Our Collection",
    link: "",
  },
  {
    id: crypto.randomUUID(),
    src: banner3,
    alt: "Fresh Reads Just In!",
    title: "Fresh Reads Just In!",
    subtitle: "Explore the Latest Additions to Our Collection",
    link: "",
  },
];

const Hero = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const router = useRouter();
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const handleClick = (link) => {
    router.push(link);
  };

  React.useEffect(()=>{
    if (window.screen.width<768) {
      setIsMobile(true)
    }else{
      setIsMobile(false)
    }
  },[]) 
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
      className="w-full sm:max-w-[90%] px-1 sm:px-4 lg:px-8 container overflow-hidden section-margin"
    >
      <CarouselContent className="h-[450px] sm:h-[300px] lg:h-[400px]">
        {banners.map((item) => ( 
            <CarouselItem key={item.id} >
              <div className="h-full rounded-lg overflow-hidden grid grid-cols-3 bg-tertiary dark:bg-themeSecondary">
                <Image
                  className="h-[280px] lg:h-[380px] mx-auto sm:mr-auto mt-auto object-contain order-2 sm:order-1 col-span-3 sm:col-span-1"
                  src={item.src}
                  alt={item.alt}
                />
                <div className="col-span-3 sm:col-span-2 flex flex-col justify-center gap-2 sm:gap-3 order-1 sm:order-2 p-5 pt-8 md:p-0 text-center sm:text-left">
                  <h2 className="text-2xl md:text-4xl xl:text-5xl font-semibold text-themeSecondary dark:text-themeSecondary-foreground">
                    {item.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl">{item.subtitle}</p>
                  <Button
                    className="self-start mx-auto sm:mx-0"
                    variant="primary"
                    onClick={() => handleClick(item?.link || "#")}
                  >
                    Explore
                  </Button>
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
