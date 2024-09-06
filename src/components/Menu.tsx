import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to="/">
          <DropdownMenuItem>Home</DropdownMenuItem>
        </Link>
        <Link to="/utenti">
          <DropdownMenuItem>Utenti</DropdownMenuItem>
        </Link>
        <Link to="/aggiungi-ore">
          <DropdownMenuItem>Ore</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Tutorial</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
