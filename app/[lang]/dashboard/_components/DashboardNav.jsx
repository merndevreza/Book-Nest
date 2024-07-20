"use client";
import { Badge } from "@/components/ui/badge";
import {
  Images,
  LineChart,
  Package,
  PackagePlus,
  ShoppingCart,
  UserPlus,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNav = ({ lang }) => {
  const pathname = usePathname();

  return (
    <nav className="grid items-start px-2 font-medium lg:px-4 gap-1">
      <Link
        href={`/${lang}/dashboard`}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname === `/${lang}/dashboard` && " bg-muted text-primary"
        } `}
      >
        <LineChart className="h-5 w-5" />
        <span className="inline lg:hidden xl:inline">Analytics</span>
      </Link>
      <Link
        href={`/${lang}/dashboard/orders`}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname.includes("orders") && " bg-muted text-primary"
        }`}
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="inline lg:hidden xl:inline">Orders</span>

        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full lg:hidden xl:flex">
          6
        </Badge>
      </Link>
      <Link
        href={`/${lang}/dashboard/products`}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname.includes("products") && " bg-muted text-primary"
        }`}
      >
        <Package className="h-5 w-5" />
        <span className="inline lg:hidden xl:inline">Products</span>

        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full  lg:hidden xl:flex">
          6
        </Badge>
      </Link>
      <Link
        href={`/${lang}/dashboard/media`}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname.includes("media") && " bg-muted text-primary"
        }`}
      >
        <Images className="h-5 w-5" />
        <span className="inline lg:hidden xl:inline">Media</span>
      </Link>
      <Link
        href={`/${lang}/dashboard/add-product`}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname.includes("add-product") && " bg-muted text-primary"
        }`}
      >
        <PackagePlus className="h-5 w-5" />
        <span className="inline lg:hidden xl:inline"> Add Product</span>
      </Link>
      <Link
        href={`/${lang}/dashboard/users`}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname.includes("users") && " bg-muted text-primary"
        }`}
      >
        <Users className="h-5 w-5" />
        <span className="inline lg:hidden xl:inline">Users</span>

        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full  lg:hidden xl:flex">
          6
        </Badge>
      </Link>
      <Link
        href={`/${lang}/dashboard/add-user`}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname.includes("add-user") && " bg-muted text-primary"
        }`}
      >
        <UserPlus className="h-5 w-5" />
        <span className="inline lg:hidden xl:inline">Add User</span>
      </Link>
    </nav>
  );
};

export default DashboardNav;
