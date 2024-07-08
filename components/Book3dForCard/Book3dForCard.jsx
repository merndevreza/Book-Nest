import Image from "next/image";
import "./book-card.css";
const Book3dForCard = ({ className,thumbnail,alt }) => {
  return (
    <div className={className}>
      <div className="book-card-img">
        <div className="book-card-img-front">
          <Image className="img" src={thumbnail} alt={alt} />
        </div>
        <div className="book-card-img-back">
          <Image className="img" src={thumbnail} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Book3dForCard;

 