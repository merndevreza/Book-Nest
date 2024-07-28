import SectionTitle from "@/components/SectionTitle";
import Testimonials from "@/components/Testimonials";
import { getReviews } from "@/database/queries/reviews.queries";

const TestimonialSection = async({dictionary,lang}) => {
  const response = await getReviews(10); 
  if (response?.success === false) {
    return null;
  }
  if (response?.data.length < 1) {
    return null;
  }
  const reviews = response?.data;
   return (
      <section className="section-padding">
      <SectionTitle
        title={dictionary?.testimonialSecTitle}
        subTitle={dictionary?.testimonialSecSubTitle}
      /> 
      <Testimonials reviews={reviews} lang={lang}/>
    </section>
   );
};

export default TestimonialSection;