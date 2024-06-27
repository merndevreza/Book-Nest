import CategoryListMenu from "../CategoryListMenu";
import MainMenu from "./MainMenu";

const Navbar = () => {
  return (
    <nav className="bg-tertiary hidden md:block">
      <div className="container flex justify-start items-center relative">
        <CategoryListMenu toggleTitle={true}/>
        <MainMenu vertical={false}/>

      </div>
    </nav>
  );
};

export default Navbar;
