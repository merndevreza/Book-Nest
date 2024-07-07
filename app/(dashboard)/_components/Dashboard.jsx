import { Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardNav from "./DashboardNav";
import DashboardNotifications from "./DashboardNotifications";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/Header/ThemeToggle";
import HomeIcon from "@/components/Header/HomeIcon";
import DashboardSearch from "./DashboardSearch";
import DashboardGoHomeBtn from "./DashboardGoHomeBtn";
import DashboardSearchToggler from "./DashboardSearchToggler";

export function Dashboard({ children }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <aside className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <span className="font-semibold">My Account</span>
            <DashboardNotifications />
          </div>
          <div className="flex-1">
            <DashboardNav />
          </div>
        </div>
      </aside>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <span className="font-semibold pl-6">My Account</span>
              <DashboardNav />
            </SheetContent>
          </Sheet>
          <DashboardGoHomeBtn/>
          <div className="w-full flex-1 hidden sm:block">
            <DashboardSearch />
          </div>
          <div className="block sm:hidden">
            <DashboardSearchToggler />
          </div> 
          <DashboardNotifications className="md:hidden" />
          <ThemeToggle className="inline-flex  bg-tertiary hover:bg-tertiary text-tertiary-foreground min-w-10 min-h-10" />
        </header>
        <main className="py-4 md:px-4 lg:py-6 lg:px-6  max-h-screen overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}
