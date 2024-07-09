import { getMainMenu } from "@/public/static-data/menu";
import MenuWidget from "../MenuWidget";

const menu =  getMainMenu()
const MainMenu = ({mobile,lang}) => {
  let vertical;
  if (mobile) {
    vertical=true
  }else{
    vertical=false
  }
  return (
    <MenuWidget mobile={mobile} menu={menu} vertical={vertical} lang={lang}/>
  );
};

export default MainMenu;
