import { getDictionary } from "../dictionary/dictionary";
import BestSellingBooksSection from "./_components/BestSellingBooksSection";
import BookFormatsSection from "./_components/BookFormatsSection"; 
import CTASection from "./_components/CTASection";
import FeaturedBooksSection from "./_components/FeaturedBooksSection";
import Hero from "./_components/Hero";
import NewArrivalsSection from "./_components/NewArrivalsSection";
import TestimonialSection from "./_components/TestimonialSection";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <Hero lang={lang} dictionary={dictionary} />
      <BookFormatsSection lang={lang} dictionary={dictionary}/> 
      <FeaturedBooksSection lang={lang} dictionary={dictionary} />
      <NewArrivalsSection lang={lang} dictionary={dictionary} />
      <CTASection lang={lang} dictionary={dictionary} />
      <BestSellingBooksSection lang={lang} dictionary={dictionary} />
      <TestimonialSection lang={lang} dictionary={dictionary} />
    </main>
  );
}
