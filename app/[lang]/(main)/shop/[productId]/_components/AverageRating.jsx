import Ratings from "@/components/Ratings";

const AverageRating = ({ reviewsResponse }) => {
  if (reviewsResponse.success === false) {
    null;
  }
  const totalReviews = reviewsResponse?.data.length;
  const averageRating =
    reviewsResponse?.data.reduce((sum, currentReview) => {
      return sum + currentReview.rating;
    }, 0) / totalReviews; 
  return (
    <div className="flex items-center gap-2 min-w-36">
      <Ratings ratingNumber={averageRating} />
      <span className="inline-block">({totalReviews})</span>
    </div>
  );
};

export default AverageRating;
