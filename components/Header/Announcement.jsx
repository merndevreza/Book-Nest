"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const allAnnouncement=[
   "Welcome to BookNest!",
   "Explore Latest Books, E-books and Audiobooks.",
   "Contact us if you could not find your books.",
]
const Announcements = ({className}) => {
   const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: true })
    )
   return (
      <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className={cn(`w-full ${className}`)}
    >
      <CarouselContent className="-mt-1 h-[80px] md:h-[50px]">
        {allAnnouncement.map((item, index) => (
          <CarouselItem key={index} className="pt-1">
            <div className="p-1 flex flex-col justify-center items-center  h-[80px] md:h-[50px]">
            <p className=" text-center">{item}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
   );
};

export default Announcements;

 
