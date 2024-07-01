import FlipImage from "./FlipImage";
import { Card, CardContent } from "./ui/card";

const CardWithFlipImg = ({
  frontImage,
  backImage,
  frontImageAlt,
  backImageAlt,
  children
}) => {
  return (
    <Card>
      <CardContent className="grid grid-cols-3 gap-3 items-center justify-center p-3 flip-box">
        <FlipImage
          frontImage={frontImage}
          backImage={backImage}
          backImageAlt={backImageAlt}
          frontImageAlt={frontImageAlt}
        />
        <div className="col-span-2">
         {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardWithFlipImg;
