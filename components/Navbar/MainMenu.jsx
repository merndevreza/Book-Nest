import { getMainMenu } from "@/public/static-data/menu";
import MenuLinks from "../MenuLinks";

const menu = getMainMenu();
const MainMenu = ({ mobile, lang }) => {
  let vertical;
  if (mobile) {
    vertical = true;
  } else {
    vertical = false;
  }
  return (
    <MenuLinks lang={lang} menu={menu} vertical={vertical} />
  );
};

export default MainMenu;
