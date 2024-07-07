import Book3dView from "@/components/Book3dView/Book3dView";
import ReadBookBtn from "./_components/ReadBookBtn";
import ProductDetails from "./_components/ProductDetails";
import AddToCartWidget from "./_components/AddToCartWidget";
import ReviewSection from "@/components/ReviewSection/ReviewSection";

import book1Front from "@/public/assets/images/books/img-01.jpg";
import SocialProfiles from "@/components/SocialProfiles";
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
const ProductDetailsPage = () => {
  return (
    <main className="container px-1 sm:px-4 lg:px-8  py-4 lg:py-12 space-y-16">
      <section className="grid grid-cols-4 gap-6">
        <div className="col-span-4 lg:col-span-3 grid grid-cols-3 justify-center gap-4 xl:gap-0  bg-tertiary dark:bg-muted p-4 lg:p-7 rounded">
          <div className="space-y-3 col-span-3 md:col-span-1">
            <Book3dView bookImg={book?.thumbnail} bookAlt={book?.title} />
            <div className="text-center pt-6">
              <ReadBookBtn />
            </div>
            <SocialProfiles/>
          </div>
          <div className="col-span-3 md:col-span-2">
            <ProductDetails book={book} />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 self-start gap-3">
          <AddToCartWidget title="Printed New Book" />
          <AddToCartWidget title="Printed Old Book" />
          <AddToCartWidget title="Ebook" />
          <AddToCartWidget title="Audio Book" />
        </div>
      </section>
      <section>
        <h4 className="text-lg md:text-xl lg:text-2xl mb-8">Customer Reviews</h4>
        <ReviewSection />
      </section>
    </main>
  );
};

export default ProductDetailsPage;
