import { cn } from "@/lib/utils";
import ContactInfoWidget from "../ContactInfoWidget";
import Logo from "../Logo";

const FooterInfoWidget = ({ className }) => {
  return (
    <div className={cn(` ${className}`)}>
      <div className="mb-10 md:mb-0">
        <Logo
          className="w-[200px] mx-auto md:mx-0"
          logoTextClassName="hidden"
        />
        <ContactInfoWidget className="pt-3 flex flex-col gap-2 items-center md:items-start" />
      </div>
    </div>
  );
};

export default FooterInfoWidget;
