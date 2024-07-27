import Ratings from "./Ratings";

const AverageRating = ({ reviews, showTotalReviews }) => {
  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((sum, currentReview) => {
      return sum + currentReview.rating;
    }, 0) / totalReviews;
  return (
    <div className={showTotalReviews && "flex items-center gap-2 min-w-36"}>
      <Ratings ratingNumber={averageRating} />
      {showTotalReviews && (
        <span className="inline-block">({totalReviews})</span>
      )}
    </div>
  );
};

export default AverageRating;
