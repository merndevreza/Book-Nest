import { cn } from "@/lib/utils";
import MenuWidget from "../MenuWidget";

const supportMenu = [
  {
    id: 1,
    nameBn: "জেনারেল",
    nameEn: "Generale",
    pathname: "/category/generale",
  },
  {
    id: 2,
    nameBn: "একাডেমি",
    nameEn: "Academy",
    pathname: "/category/academy",
  },
  {
    id: 3,
    nameBn: "মেডিকেল",
    nameEn: "Medical",
    pathname: "/category/medical",
  },
  {
    id: 4,
    nameBn: "পুরাতন বই",
    nameEn: "Old Books",
    pathname: "/category/old-books",
  },
];
const policyMenu= [
   {
     id: 1,
     nameBn: "জেনারেল",
     nameEn: "Generale",
     pathname: "/category/generale",
   },
   {
     id: 2,
     nameBn: "একাডেমি",
     nameEn: "Academy",
     pathname: "/category/academy",
   },
   {
     id: 3,
     nameBn: "মেডিকেল",
     nameEn: "Medical",
     pathname: "/category/medical",
   },
   {
     id: 4,
     nameBn: "পুরাতন বই",
     nameEn: "Old Books",
     pathname: "/category/old-books",
   },
 ];

const FooterMenuWIdget = ({className,lang}) => {
  return (
    <div className={cn(`grid grid-cols-3 ${className}`)}>
      <MenuWidget lang={lang} menu={supportMenu} vertical={true} menuTitle="Support" footerMenu={true}/>
      <MenuWidget  lang={lang} menu={policyMenu} vertical={true} menuTitle="Policies" footerMenu={true}/>
      <MenuWidget  lang={lang} menu={policyMenu} vertical={true} menuTitle="Policies" footerMenu={true}/>
    </div>
  );
};

export default FooterMenuWIdget;
