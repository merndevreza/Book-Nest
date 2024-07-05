import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

const LogoutBtn = ({ variant, className }) => {
  return (
    <Button variant={variant} size="sm" className={className}>
      <span
        className="flex items-center gap-2"
      >
        <span>Logout</span> <LogOut size={16} />
      </span>
    </Button>
  );
};

export default LogoutBtn;
