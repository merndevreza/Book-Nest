import AddProductForm from "./_components/AddProductForm";
import AddProductFormBlob from "./_components/AddProductFormBlob";
import { AddProduct } from "./all";

const AddProductPage = ({params:{lang}}) => {
   return (
      <div>
         {/* <AddProductForm/> */}
         <AddProductFormBlob/>
         <AddProduct/>
      </div>
   );
};

export default AddProductPage;