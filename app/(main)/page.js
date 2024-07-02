import BestSellingBooksSection from "./_components/BestSellingBooksSection";
import BooksTypeSection from "./_components/BooksTypeSection";
import Hero from "./_components/Hero";
import NewArrivalsSection from "./_components/NewArrivalsSection"; 
import TestimonialSection from "./_components/TestimonialSection";

export default function Home() {
  return (
     <main>
      <Hero/>
      <BooksTypeSection/>
      <NewArrivalsSection/>
      <BestSellingBooksSection/>
      <TestimonialSection/>
     </main>
  );
}
