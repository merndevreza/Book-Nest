import Copyright from "./Copyright";
import FooterInfoWidget from "./FooterInfoWidget";
import FooterMenuWIdget from "./FooterMenuWIdget";

const Footer = ({dictionary,lang}) => {
  return (
    <footer className="bg-secondary text-secondary-foreground mb-20 md:mb-0 section-margin">
      <div className="container grid grid-cols-1 md:grid-cols-5 px-0 py-3 md:py-10 ">
        <FooterInfoWidget className="md:col-span-2" lang={lang}/>
        <FooterMenuWIdget className="md:col-span-3" lang={lang}/>
      </div>
      <Copyright dictionary={dictionary}/>
    </footer>
  );
};

export default Footer;
