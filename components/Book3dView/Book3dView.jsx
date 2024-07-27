import Image from "next/image";
import "./book-3d-view.css"
const Book3dView = ({bookImg,bookAlt, className}) => {
  return (
    <div className={`book-container pt-6 ${className}`}>
      <div className="book">
        <Image width={200} height={300} src={bookImg} alt={bookAlt} />
      </div>
    </div>
  );
};

export default Book3dView;
