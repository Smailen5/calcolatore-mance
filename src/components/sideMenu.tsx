import { Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { FaClock, FaUser } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { SiGoogledocs } from "react-icons/si";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={handleClick} className="cursor-pointer">
        <IoMenu className="size-6" />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-0 h-screen w-full bg-white text-3xl">
          <div className="relative flex flex-col items-center justify-center">
            <Button
              variant={"ghost"}
              onClick={handleClick}
              className="absolute right-4 top-4"
            >
              <Cross1Icon className="size-6" />
            </Button>

            <div className="flex h-screen flex-col justify-center gap-4">
              <Link to="/" className="flex items-center gap-4">
                <IoIosHome />
                Home
              </Link>
              <Link to="/utenti" className="flex items-center gap-4">
                <FaUser />
                Aggiungi utenti
              </Link>
              <Link to="/aggiungi-ore" className="flex items-center gap-4">
                <FaClock />
                Aggiungi ore
              </Link>
              <Link to="" className="flex items-center gap-4">
                <SiGoogledocs />
                Tutorial
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideMenu;
