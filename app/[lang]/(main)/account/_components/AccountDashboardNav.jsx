"use client";
import { Badge } from "@/components/ui/badge";
import { FileAudio, FileDown, ShoppingCart, UserRoundCog } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AccountDashboardNav = ({ dictionary, lang }) => {
  const pathname = usePathname();

  return (
    <nav className="grid items-start px-2 font-medium lg:px-4 gap-1">
      <Link
        href={`/${lang}/account`}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname === `/${lang}/account` && " bg-muted text-primary"
        } `}
      >
        <UserRoundCog className="h-5 w-5" />
        {dictionary?.profile}
      </Link>
      <Link
        href={`/${lang}/account/orders`}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname.includes("orders") && " bg-muted text-primary"
        }`}
      >
        <ShoppingCart className="h-5 w-5" />
        {dictionary?.orders}
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
      <Link
        href={`/${lang}/account/e-books`}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname.includes("e-books") && " bg-muted text-primary"
        }`}
      >
        <FileDown className="h-5 w-5" />
        {dictionary?.eBooks}
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
      <Link
        href={`/${lang}/account/audio-books`} 
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname.includes("audio-books") && " bg-muted text-primary"
        }`}
      >
        <FileAudio className="h-5 w-5" />
        {dictionary?.audioBooks}
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
    </nav>
  );
};

export default AccountDashboardNav;
