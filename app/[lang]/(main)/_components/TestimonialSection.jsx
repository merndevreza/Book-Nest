import SectionTitle from "@/components/SectionTitle";
import Testimonials from "@/components/Testimonials";

const TestimonialSection = ({dictionary,lang}) => {
   return (
      <section className="section-padding">
      <SectionTitle
        title={dictionary?.testimonialSecTitle}
        subTitle={dictionary?.testimonialSecSubTitle}
      /> 
      <Testimonials lang={lang}/>
    </section>
   );
};

export default TestimonialSection;