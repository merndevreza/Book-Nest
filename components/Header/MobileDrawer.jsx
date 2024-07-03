"use client"; 
import {
  Sheet, 
  SheetContent, 
  SheetFooter,
  SheetHeader, 
  SheetTrigger,
} from "@/components/ui/sheet";
import { Headphones, Mail, MapPin, Menu } from "lucide-react";
import MainMenu from "../Navbar/MainMenu";
import Logo from "../Logo";
import { Separator } from "../ui/separator";
import {
  Card,
  CardContent, 
  CardHeader,
  CardTitle,
} from "../ui/card";
import ContactInfoWidget from "../ContactInfoWidget";

export function MobileDrawer({ className }) {
  return (
    <Sheet>
      <SheetTrigger asChild className={className}>
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent className="overflow-scroll" side="left">
        <SheetHeader>
          <div>
          <Logo className="  w-[120px] mx-auto md:mx-0" logoTextClassName="text-center" />
            <Separator className="mb-6" />
          </div>
        </SheetHeader>
        <MainMenu mobile={true}/>
        <SheetFooter className="mt-8">
          <Card>
            <CardHeader className="p-3">
              <CardTitle className="text-base mb-0">Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 px-3">
              <ContactInfoWidget/>
            </CardContent> 
          </Card>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
