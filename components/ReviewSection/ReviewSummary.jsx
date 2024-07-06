import Ratings from "../Ratings";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Progress } from "../ui/progress";

const ReviewSummary = () => {
  return (
    <Card>
      <CardHeader className="px-4 pt-4 pb-0">
        <CardTitle className="text-xl">Customer Review Stats</CardTitle>
        <div className="space-y-1 pt-4">
          <Ratings ratingNumber={5} />
          <p>0.0 out of 5</p>
        </div>
      </CardHeader>
      <CardContent  className="p-4">
        <div className="grid grid-cols-5 items-center gap-2">
          <p>5 Star: </p>
          <div className="col-span-4">
            <Progress value={80} className="h-2" />
          </div>
        </div>
        <div className="grid grid-cols-5 items-center gap-2">
          <p>4 Star: </p>
          <div className="col-span-4">
            <Progress value={30} className="h-2" />
          </div>
        </div>
        <div className="grid grid-cols-5 items-center gap-2">
          <p>3 Star: </p>
          <div className="col-span-4">
            <Progress value={40} className="h-2" />
          </div>
        </div>
        <div className="grid grid-cols-5 items-center gap-2">
          <p>2 Star: </p>
          <div className="col-span-4">
            <Progress value={20} className="h-2" />
          </div>
        </div>
        <div className="grid grid-cols-5 items-center gap-2">
          <p>1 Star: </p>
          <div className="col-span-4">
            <Progress value={10} className="h-2" />
          </div>
        </div> 
      </CardContent> 
    </Card>
  );
};

export default ReviewSummary;
