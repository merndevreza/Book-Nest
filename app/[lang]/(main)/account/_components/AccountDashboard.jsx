import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NotificationIconBtn from "./NotificationIconBtn";
import AccountDashboardNav from "./AccountDashboardNav";

export function AccountDashboard({ children,dictionary,lang }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <aside className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <span className="font-semibold">{dictionary?.myAccount}</span>
            <NotificationIconBtn />
          </div>
          <div className="flex-1">
            <AccountDashboardNav lang={lang} dictionary={dictionary}/>
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
              <span className="font-semibold pl-6">{dictionary?.myAccount}</span>
              <AccountDashboardNav  lang={lang} dictionary={dictionary}/>
            </SheetContent>
          </Sheet>
        </header>
        <main className="py-4 md:px-4 lg:py-6 lg:px-6  max-h-screen overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}
