import MenuWidget from "../MenuWidget";

const menu = [
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
