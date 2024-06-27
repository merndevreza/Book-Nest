"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const ImageCarousel = ({
  imageArray,
  height,
  className,
  isLoop,
  orientation,
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
        loop: isLoop,
      }}
      // orientation="vertical | horizontal"
      orientation={orientation}
      className={`w-full max-w-xl ${className}`}
    >
      <CarouselContent className={`-mt-1 h-[${height}px]`}>
        {imageArray.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="rounded-sm bg-tertiary border-none">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    <Image src={item.src} alt={item.alt} />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageCarousel;
