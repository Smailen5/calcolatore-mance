import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-secondary p-4 fixed top-0 w-full">
      <h1>Dividi Mance</h1>
      {/* aggiungi qui il componente menu per navigare fra le pagine */}
      <Menu />
    </nav>
  );
};

export default Navbar;
