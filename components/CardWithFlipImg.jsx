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
      <CardContent className="grid grid-cols-5 gap-4 items-center justify-center p-3 flip-box">
        <FlipImage
        className="col-span-2"
          frontImage={frontImage}
          backImage={backImage}
          backImageAlt={backImageAlt}
          frontImageAlt={frontImageAlt}
        />
        <div className="col-span-3">
         {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardWithFlipImg;
