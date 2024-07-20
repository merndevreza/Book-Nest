import { cn } from "@/lib/utils";
import MenuWidget from "../MenuWidget";
import { getPolicyMenu, getSupportMenu } from "@/public/static-data/menu";
const supportMenu = getSupportMenu();
const policyMenu = getPolicyMenu();

const FooterMenuWIdget = ({ className, lang }) => {
  return (
    <div className={cn(`grid grid-cols-3 gap-3 ${className}`)}>
      <MenuWidget
        className="col-span-3 md:col-span-1"
        lang={lang}
        menu={supportMenu}
        vertical={true}
        menuTitle="Support"
        footerMenu={true}
      />
      <MenuWidget
        className="col-span-3 md:col-span-1"
        lang={lang}
        menu={policyMenu}
        vertical={true}
        menuTitle="Policies"
        footerMenu={true}
      />
      <MenuWidget
        className="col-span-3 md:col-span-1"
        lang={lang}
        menu={policyMenu}
        vertical={true}
        menuTitle="Policies"
        footerMenu={true}
      />
    </div>
  );
};

export default FooterMenuWIdget;
