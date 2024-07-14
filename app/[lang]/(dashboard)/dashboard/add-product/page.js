import AddProductForm from "./_components/AddProductForm";
import { AddProduct } from "./all";

const AddProductPage = ({params:{lang}}) => {
   return (
      <div>
         <AddProductForm/>
         <AddProduct/>
      </div>
   );
};

export default AddProductPage;