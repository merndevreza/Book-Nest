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

export function MobileDrawer({ className }) {
  return (
    <Sheet>
      <SheetTrigger asChild className={className}>
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent className="overflow-scroll" side="left">
        <SheetHeader>
          <div>
            <Logo />
            <Separator className="mb-6" />
          </div>
        </SheetHeader>
        <MainMenu vertical={true} />
        <SheetFooter className="mt-8">
          <Card>
            <CardHeader className="p-3">
              <CardTitle className="text-md mb-0">Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 px-3">
              <div className="flex gap-3">
                <MapPin  className="text-themePrimary" size={24} />
                <span> <strong>Address:</strong> Khilkhet, Dhaka, Bangladesh.</span>
              </div>
              <div  className="flex gap-3">
                <Headphones className="text-themePrimary" size={24} />
                <span><strong>Support:</strong> +8801780572272</span>
              </div>
              <div className="flex gap-3">
                <Mail className="text-themePrimary" size={24} />
                <span><strong>Email:</strong> rezaulkarimpstu@gmail.com</span>
              </div>
            </CardContent> 
          </Card>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
