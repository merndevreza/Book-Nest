import Copyright from "./Copyright";
import FooterInfoWidget from "./FooterInfoWidget";
import FooterMenuWIdget from "./FooterMenuWIdget";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mb-20 md:mb-0">
      <div className="container grid grid-cols-1 md:grid-cols-5 py-10">
        <FooterInfoWidget className="md:col-span-2" />
        <FooterMenuWIdget className="md:col-span-3" />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
