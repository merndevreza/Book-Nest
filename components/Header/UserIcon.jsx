import { CircleUser } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import LogoutBtn from "../LogOut";

const UserIcon = ({ session, lang }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hidden md:block">
        <Button variant="secondary" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage
              src={session ? session?.user.image : ""}
              alt="user name"
            />
            <AvatarFallback className="dark:bg-gray-600 bg-tertiary">
              <CircleUser className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>

          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={`/${lang}/account`}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/${lang}/account/orders`}>Orders</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/${lang}/dashboard`}>Dashboard</Link>
        </DropdownMenuItem>
        {session && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutBtn variant="ghost" className="h-5 pl-0" />
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserIcon;
