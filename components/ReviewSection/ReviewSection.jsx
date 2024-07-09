import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard";
import ReviewSummary from "./ReviewSummary";

const ReviewSection = ({bookId,dictionary}) => {
   return (
      <div className="grid grid-cols-4 gap-6 ">
         <div className="col-span-4 md:col-span-2 xl:col-span-3 space-y-3 order-2 md:order-1 max-h-[400px] overflow-y-scroll">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <AddReview/>
         </div>
         <div className="col-span-4 md:col-span-2 xl:col-span-1 order-1 md:order-2">
            <ReviewSummary dictionary={dictionary} />
         </div>
      </div>
   );
};

export default ReviewSection;