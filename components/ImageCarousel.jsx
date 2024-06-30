"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image"; 

const ImageCarousel = ({
  imageArray,
  width,
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
      className="w-full max-w-xl"
    >
      <CarouselContent className={` h-[${height}px]`}>
        {imageArray.map((item, index) => (
          <CarouselItem key={index}>
            <Image
              className={className}
              width={width}
              height={height}
              src={item.src}
              alt={item.alt}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageCarousel;
