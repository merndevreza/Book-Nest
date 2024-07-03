import Image from "next/image";
import "./book-3d-view.css"
const Book3dView = ({bookImg,bookAlt}) => {
  return (
    <div className="book-container">
      <div className="book-sm">
        <Image src={bookImg} alt={bookAlt} />
      </div>
    </div>
  );
};

export default Book3dView;
