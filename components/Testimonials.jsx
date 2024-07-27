import Image from "next/image";
import Ratings from "./Ratings";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"; 
import Book3dView from "./Book3dView/Book3dView";
import Link from "next/link";
import { getReviews } from "@/database/queries/reviews.queries";

const Testimonials = async ({ lang }) => {
  const reviews = await getReviews(10);    
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="container lg:max-w-5xl px-1 sm:px-10"
    >
      <CarouselContent>
        {reviews?.data.map((review) => (
          <CarouselItem key={review.id}>
            <div className="flex flex-col sm:flex-row p-4 pt-8 md:p-8 gap-8 rounded-md  bg-[#f7f7f7] dark:bg-secondary">
              <div className="flex justify-center items-center">
                <Link href={`/${lang}/shop/${review?.productId?._id.toString()}`}> 
                  <Book3dView
                    bookImg={review?.productId?.thumbnail}
                    bookAlt={review?.productId?.title}
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-center w-full">
                <div>
                  <div className="flex justify-between ">
                    <h2 className="text-xl mb-3 md:text-3xl text-themePrimary dark:text-white">
                      <Link  href={`/${lang}/shop/${review?.productId?._id.toString()}`}>
                        {review?.productId?.title}
                      </Link>
                    </h2>
                    <div className="text-xl">
                      <Ratings ratingNumber={review?.rating} />
                    </div>
                  </div>
                  <p className="capitalize font-bold text-xl dark:text-white -mt-2">
                    By: {review?.productId?.authorId?.userId?.firstName}{" "} 
                    {review?.productId?.authorId?.userId?.lastName}
                  </p>
                </div>
                <div className="mt-8 bg-tertiary text-tertiary-foreground  p-5 rounded-lg ">
                  <div>
                    <Image
                      className="w-[70px] rounded-full h-[70px] object-cover"
                      width={70}
                      height={70}
                      src={review?.userId?.avatar}
                      alt={`${review?.userId?.firstName} ${review?.userId?.lastName}`}
                    />
                  </div>
                  <p className="text-lg font-bold  mt-1">{`${review?.userId?.firstName} ${review?.userId?.lastName}`}
                  </p>
                  <p className="text-base font-bold  mt-4 text-foreground">
                    {review?.comment}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="hidden md:inline-flex right-0 xl:-right-8" />
      <CarouselPrevious className="hidden md:inline-flex left-0 xl:-left-8" />
    </Carousel>
  );
};

export default Testimonials;
