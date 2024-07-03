import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import "./flip-img.css"

const CardWithFlipImg = ({
  frontImage,
  backImage,
  frontImageAlt,
  backImageAlt,
  children,
}) => {
  return (
    <Card>
      <CardContent className="grid grid-cols-5 gap-4 items-center justify-center p-3 flip-box">
        <div className={cn(`flip ${className}`)}>
          <div className="flip__face flip__face--front">
            <Image className="img" src={frontImage} alt={frontImageAlt} />
          </div>
          <div className="flip__face flip__face--back">
            <Image className="img" src={backImage} alt={backImageAlt} />
          </div>
        </div>
        <div className="col-span-3">{children}</div>
      </CardContent>
    </Card>
  );
};

export default CardWithFlipImg;
