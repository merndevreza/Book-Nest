import { doSignOut } from "@/app/actions";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

const LogoutBtn = ({ variant, className }) => {
  return (
    <form action={doSignOut}>
      <Button type="submit" variant={variant} size="sm" className={className}>
        <span className="flex items-center gap-2">
          <span>Logout</span> <LogOut size={16} />
        </span>
      </Button>
    </form>
  );
};

export default LogoutBtn;
