import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Ratings from "../Ratings";

const ReviewCard = ({ review }) => {
  return (
    <Card className="px-4">
      <CardHeader className="p-2">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3">
          <Image
            src={review?.user?.avatar || review?.user?.image}
            alt={`${review?.user?.firstName || review?.user?.name} ${
              review?.user?.lastName || ""
            }`}
            width={44}
            height={44}
            className="w-11 h-11 object-cover rounded-full"
          />
          <div>
            <CardTitle className="text-lg text-themePrimary">
              {`${review?.user?.firstName || review?.user?.name} ${
                review?.user?.lastName || ""
              }`}
            </CardTitle>
            <Ratings ratingNumber={review?.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-2">
        <p>{review?.comment}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
