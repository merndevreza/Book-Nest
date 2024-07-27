 
import ReviewCard from "./ReviewCard";
import ReviewSummary from "./ReviewSummary";

const ReviewSection = async ({ response, dictionary }) => { 
  if (response.success === false) {
    return <p>Error occurred: {response.message}</p>;
  }
  return (
    <div className="grid grid-cols-4 gap-6 ">
      <div className="col-span-4 md:col-span-2 xl:col-span-3 space-y-3 order-2 md:order-1 max-h-[350px] overflow-y-scroll">
        {response?.data.length > 0 ? (
          response?.data.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <p>No reviews found</p>
        )}
      </div>
      <div className="col-span-4 md:col-span-2 xl:col-span-1 order-1 md:order-2">
        <ReviewSummary response={response} dictionary={dictionary} />
      </div>
    </div>
  );
};

export default ReviewSection;
