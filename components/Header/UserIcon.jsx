import { User } from "lucide-react"; 
import { Button } from "../ui/button";

const UserIcon = ({className,showTitle}) => {
   return (
      <Button className={className} variant="secondary" size="icon">
      <span className="inline-block">
        <User size={24} /> 
      </span>
      {showTitle && <span className="font-semibold">Account</span>}
    </Button> 
   );
};

export default UserIcon;