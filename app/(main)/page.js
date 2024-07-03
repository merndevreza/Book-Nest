
import BestSellingBooksSection from "./_components/BestSellingBooksSection";
import BooksTypeSection from "./_components/BooksTypeSection";
import CTASection from "./_components/CTASection";
import FeaturedBooksSection from "./_components/FeaturedBooksSection";
import Hero from "./_components/Hero";
import NewArrivalsSection from "./_components/NewArrivalsSection"; 
import TestimonialSection from "./_components/TestimonialSection";

export default function Home() {
  return (
     <main>
      <Hero/>
      <BooksTypeSection/>
      <FeaturedBooksSection/>
      <NewArrivalsSection/>
      <CTASection/>
      <BestSellingBooksSection/>
      <TestimonialSection/> 
     </main>
  );
}
