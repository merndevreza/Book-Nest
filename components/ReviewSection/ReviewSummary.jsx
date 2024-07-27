import calculateInPercentage from "@/utils/calculateInPercentage";
import Ratings from "../Ratings";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

const ReviewSummary = ({ response, dictionary }) => {
  const totalReviews = response?.data.length;
  const averageRating =
    response?.data.reduce((sum, currentReview) => {
      return sum + currentReview.rating;
    }, 0) / totalReviews;
  let fiveStars = 0;
  let fourStars = 0;
  let threeStars = 0;
  let twoStars = 0;
  let oneStars = 0;
  for (let i = 0; i < response?.data.length; i++) {
     
    if (response?.data[i].rating === 5) {
      fiveStars++;
    } else if (response?.data[i].rating >= 4 && response?.data[i].rating < 5) {
      fourStars++;
    } else if (response?.data[i].rating >= 3 && response?.data[i].rating < 4) {
      threeStars++;
    } else if (response?.data[i].rating >= 2 && response?.data[i].rating < 3) {
      twoStars++;
    } else if (response?.data[i].rating > 0 && response?.data[i].rating < 2) {
      oneStars++;
    } else {
      null;
    }
  }
  return (
    <Card>
      <CardHeader className="px-4 pt-4 pb-0">
        <CardTitle className="text-xl">
          {dictionary?.customerReviewStats}
        </CardTitle>
        <div className="space-y-1 pt-4">
          <Ratings ratingNumber={averageRating.toFixed(2)} />
          <p>{averageRating.toFixed(2)} out of 5</p>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-5 items-center gap-2">
          <p>5 Star: </p>
          <div className="col-span-4">
            <Progress
              value={calculateInPercentage(fiveStars, totalReviews)}
              className="h-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 items-center gap-2">
          <p>4 Star: </p>
          <div className="col-span-4">
            <Progress
              value={calculateInPercentage(fourStars, totalReviews)}
              className="h-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 items-center gap-2">
          <p>3 Star: </p>
          <div className="col-span-4">
            <Progress
              value={calculateInPercentage(threeStars, totalReviews)}
              className="h-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 items-center gap-2">
          <p>2 Star: </p>
          <div className="col-span-4">
            <Progress
              value={calculateInPercentage(twoStars, totalReviews)}
              className="h-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 items-center gap-2">
          <p>1 Star: </p>
          <div className="col-span-4">
            <Progress
              value={calculateInPercentage(oneStars, totalReviews)}
              className="h-2"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewSummary;
