import Book3dView from "@/components/Book3dView/Book3dView";
import ReadBookBtn from "./_components/ReadBookBtn";
import ProductDetails from "./_components/ProductDetails";
import AddToCartWidget from "./_components/AddToCartWidget";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import SocialProfiles from "@/components/SocialProfiles";

import book1Front from "@/public/assets/images/books/img-01.jpg";
import book1Back from "@/public/assets/images/books/img-02.jpg";
import book2Front from "@/public/assets/images/books/img-03.jpg";
import book2Back from "@/public/assets/images/books/img-04.jpg"; 
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import BookCard from "@/components/BookCard/BookCard";
import { getDictionary } from "@/app/[lang]/dictionary/dictionary";
const books = [
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    thumbnail: book1Front,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 4,
    types: ["printed", "pdf", "audio"],
  },
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    thumbnail: book2Front,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: null,
    rating: 4,
    types: ["printed", "audio"],
  },
  {
    id: crypto.randomUUID(),
    title: "ইংলিশে দুর্বলদের জন্য English Therapy",
    thumbnail: book1Back,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 3,
    types: ["printed", "pdf"],
  },
  {
    id: crypto.randomUUID(),
    title: "Ognibina",
    thumbnail: book2Back,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 4,
    types: ["pdf", "audio"],
  },
  {
    id: crypto.randomUUID(),
    title: "জার্মান ব্যাকরণ A1 থেকে B1 ( বাংলা ভার্সন )",
    thumbnail: book1Back,
    category: "Drama",
    authorName: "Kaji Nozrul Islam",
    regularPrice: 200,
    discountedPrice: 180,
    rating: 5,
    types: ["printed"],
  },
];
const book = {
  id: crypto.randomUUID(),
  title:
    "জার্মান ব্যাকরণ A1 থেকে B1 ( বাংলা ভার্সন ) জার্মান ব্যাকরণ A1 থেকে B1 ( বাংলা ভার্সন )",
  thumbnail: book1Front,
  category: "Drama",
  authorName: "Kaji Nozrul Islam",
  regularPrice: 200,
  discountedPrice: 180,
  rating: 5,
  types: ["printed"],
};
const social= {
  facebook: "https://www.facebook.com/",
  twitter: "https://www.twitter.com/",
  linkedIn: "https://www.linkedin.com/in/",
}
const ProductDetailsPage = async({params:{lang}}) => {
  const dictionary=await getDictionary(lang)
  return (
    <main className="container px-1 sm:px-4 lg:px-8  py-4 lg:py-12 space-y-16">
      <section className="grid grid-cols-4 gap-6">
        <div className="col-span-4 lg:col-span-3 grid grid-cols-3 justify-center gap-4 xl:gap-0  bg-tertiary dark:bg-muted p-4 lg:p-7 rounded">
          <div className="space-y-3 col-span-3 md:col-span-1">
            <Book3dView bookImg={book?.thumbnail} bookAlt={book?.title} />
            <div className="text-center pt-6">
              <ReadBookBtn dictionary={dictionary}/>
            </div>
            <div className="pt-6 flex gap-2 justify-center">
              <span>Share:</span> <SocialProfiles links={social} className="md:justify-center"/>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2">
            <ProductDetails book={book} dictionary={dictionary} />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 self-start gap-3">
          <AddToCartWidget title={dictionary?.printedNewBook} />
          <AddToCartWidget title={dictionary?.printedOldBook} />
          <AddToCartWidget title={dictionary?.eBook} />
          <AddToCartWidget title={dictionary?.audioBook} />
        </div>
      </section>
      <section>
        <h4 className="text-lg md:text-xl lg:text-2xl mb-8">{dictionary?.customerReviews}</h4>
        <ReviewSection dictionary={dictionary} />
      </section>
      <section className="section-padding">
      <h4 className="text-lg md:text-xl lg:text-2xl mb-8">{dictionary?.recommendedProductsTitle}</h4>
        <Carousel 
        opts={{
          align: "start",
        }}
        className=" px-1 sm:px-4 lg:px-8 container "
        >
          <CarouselContent>
            {books.map((book) => (
              <CarouselItem
                key={book.id}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <BookCard book={book} dictionary={dictionary} lang={lang}/>
              </CarouselItem>
            ))}
          </CarouselContent> 
        </Carousel>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
