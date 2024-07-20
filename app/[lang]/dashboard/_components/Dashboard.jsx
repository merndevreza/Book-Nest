import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardNav from "./DashboardNav";
import DashboardNotifications from "./DashboardNotifications"; 
import { ThemeToggle } from "@/components/Header/ThemeToggle";  
import DashboardGoHomeBtn from "./DashboardGoHomeBtn";
 

export function Dashboard({ children,lang }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <aside className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <span className="font-semibold">Dashboard</span>
            <DashboardNotifications />
          </div>
          <div className="flex-1">
            <DashboardNav lang={lang}/>
          </div>
        </div>
      </aside>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <div className="space-x-3">
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
            <DashboardNotifications className="md:hidden" />
            </div>
            <SheetContent side="left" className="flex flex-col">
              <span className="font-semibold pl-6">Dashboard</span>
              <DashboardNav  lang={lang}/>
            </SheetContent>
          </Sheet>
          <DashboardGoHomeBtn  lang={lang}/>  
          <ThemeToggle className="inline-flex  bg-tertiary hover:bg-tertiary text-tertiary-foreground min-w-10 min-h-10" />
        </header>
        <main className=" md:px-4 lg:px-6 pt-0 pb-20 ">
          {children}
        </main>
      </div>
    </div>
  );
}
