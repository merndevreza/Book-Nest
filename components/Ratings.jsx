import starIcon from "@/public/assets/images/star.svg" 
import emptyStarIcon from "@/public/assets/images/star-empty.svg" 
import Image from "next/image";
 
const Ratings = ({ratingNumber}) => {

   const countStars = (rating) => {
      const totalStars = 5;
      const stars = [];
      for (let i = 1; i <= totalStars; i++) {
        if (i <= rating) {
          stars.push(<Image src={starIcon} alt="Star fill" key={i}/>);
        } else {
          stars.push(<Image src={emptyStarIcon} alt="Star empty" key={i}/>);
        }
      }
      return stars;
    };
    
   return (
      <div className="flex text-themePrimary">
         {countStars(ratingNumber)}
      </div>
   );
}; 
export default Ratings;