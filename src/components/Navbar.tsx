// import Menu from "./Menu";
import SideMenu from "./sideMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-20 flex w-full justify-between bg-secondary p-4">
      <h1>Dividi Mance</h1>
      {/* aggiungi qui il componente menu per navigare fra le pagine */}
      {/* <Menu /> */}
      <SideMenu />
    </nav>
  );
};

export default Navbar;
