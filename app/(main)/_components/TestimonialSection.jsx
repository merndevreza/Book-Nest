import SectionTitle from "@/components/SectionTitle";
import Testimonials from "@/components/Testimonials";

const TestimonialSection = () => {
   return (
      <section className="section-padding">
      <SectionTitle
        title="Happy Customers"
        subTitle="Our customer feedbacks"
      /> 
      <Testimonials/>
    </section>
   );
};

export default TestimonialSection;