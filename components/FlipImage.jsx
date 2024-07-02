import { cn } from "@/lib/utils";
import Image from "next/image";

const FlipImage = ({ frontImage, backImage, frontImageAlt, backImageAlt,className }) => {
  return (
    <div className={cn(`flip ${className}`)}>
      <div className="flip__face flip__face--front">
        <Image className="img" src={frontImage} alt={frontImageAlt} />
      </div>
      <div className="flip__face flip__face--back">
        <Image className="img" src={backImage} alt={backImageAlt} />
      </div>
    </div>
  );
};

export default FlipImage;
