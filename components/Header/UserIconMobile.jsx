import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {User } from "lucide-react";

const UserIconMobile = () => {
  return (
    <Link
      href="/account"
      className=" text-secondary-foreground hover:bg-secondary/80 flex flex-col items-center text-sm "
    >
      <Avatar>
        <AvatarImage src="" alt="user name" />
        <AvatarFallback >
          <User  />
        </AvatarFallback>
      </Avatar>
      <span className="font-semibold">Account</span>
    </Link>
  );
};

export default UserIconMobile;
