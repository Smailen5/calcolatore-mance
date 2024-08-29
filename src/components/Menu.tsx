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
        <DropdownMenuItem>
          <Link to="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/utenti">Utenti</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/aggiungi-ore">Ore</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Tutorial</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
