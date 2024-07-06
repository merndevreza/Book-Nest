import Image from "next/image";
import {
  Card,
  CardContent, 
  CardHeader,
  CardTitle,
} from "../ui/card";
import user1 from "@/public/assets/images/user-1.jpg";
import Ratings from "../Ratings";
const data={
  id: crypto.randomUUID(),
  review:
    "Adventures in the Kitchen is an absolute culinary masterpiece. The author descriptions transport you into a world of delectable flavors and fragrant aromas. This book is not just  a collection of recipes; Whether you are an experienced chef or a kitchen newbie, this book will ignite your passion for cooking and leave you hungry for more. A must-read for food enthusiasts and storytellers alike!",
  rating: 4,
  user: {
    name:"Rezaul Karim",
    avatar:user1, 
  },
  bookId: crypto.randomUUID(),
}
const ReviewCard = () => {
  return (
    <Card className="px-4"> 
      <CardHeader className="p-2">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3">
        <Image
              src={data?.user?.avatar}
              alt={data?.user?.name}
              className="w-16 h-16 object-cover rounded-full"
            /> 
          <div>
            <CardTitle className="text-xl text-themePrimary">{data?.user?.name}</CardTitle>
            <Ratings ratingNumber={data?.rating}/>
          </div>
        </div>
      </CardHeader> 
      <CardContent  className="p-2">
         <p>{data?.review}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
