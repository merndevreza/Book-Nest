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

const Testimonials = ({ reviews, lang }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="container lg:max-w-5xl px-1 sm:px-10"
    >
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review.id}>
            <div className="flex flex-col sm:flex-row p-4 pt-8 md:p-8 gap-8 rounded-md  bg-[#f7f7f7] dark:bg-secondary">
              <div className="flex justify-center items-center">
                <Link href={`/${lang}/shop/${review?.product?._id.toString()}`}>
                  <Book3dView
                    bookImg={review?.product?.thumbnail}
                    bookAlt={review?.product?.title}
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-center w-full">
                <div>
                  <div className="flex justify-between ">
                    <h2 className="text-xl mb-3 md:text-3xl text-themePrimary dark:text-white">
                      <Link
                        href={`/${lang}/shop/${review?.product?._id.toString()}`}
                      >
                        {review?.product?.title}
                      </Link>
                    </h2>
                    <div className="text-xl">
                      <Ratings ratingNumber={review?.rating} />
                    </div>
                  </div>
                  <p className="capitalize font-bold text-xl dark:text-white -mt-2">
                    By: {review?.product?.author?.firstName}{" "}
                    {review?.product?.author?.lastName}
                  </p>
                </div>
                <div className="mt-8 bg-tertiary text-tertiary-foreground  p-5 rounded-lg ">
                  <div>
                    <Image
                      className="w-[60px] rounded-full h-[60px] object-cover"
                      width={60}
                      height={60}
                      src={review?.user?.avatar || review?.user?.image}
                      alt= {`${review?.user?.firstName || review?.user?.name} ${
                        review?.user?.lastName || ""
                      }`}
                    />
                  </div>
                  <p className="text-lg font-bold  mt-1">
                    {`${review?.user?.firstName || review?.user?.name} ${
                      review?.user?.lastName || ""
                    }`}
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
