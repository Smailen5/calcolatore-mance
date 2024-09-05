import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={handleClick}>Menu</div>
      {isOpen && (
        <div className="absolute left-0 top-0 h-screen w-full bg-white text-3xl">
          <div className="relative flex flex-col items-center justify-center">
            <Button onClick={handleClick} className="absolute right-4 top-4">
              Chiudi
            </Button>

            <ul className="flex h-screen flex-col justify-center gap-4">
              <Link to="/">Home</Link>
              <Link to="/utenti">Aggiungi utenti</Link>
              <Link to="/aggiungi-ore">Aggiungi ore</Link>
              <Link to="">Tutorial</Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SideMenu;
