import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoBagHandleOutline, IoMenu } from "react-icons/io5";
import logo from "../../../assets/images/logo/lBlack160.png";
import Container from "@/components/ui/Container";
import NavItems from "./NavItems";

// const navItems = [
//   { label: "Home", path: "/" },
//   { label: "Collection", path: "/collection" },
//   { label: "Home", path: "/" },
// ];

const Navbar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-8">
        {/* Nav Item */}
        <div>
          <NavItems child={<IoMenu />} />
        </div>

        {/* logo */}
        <div className="flex items-center gap-3">
          <div className="size-12">
            <img src={logo} alt="Laivaly" />
          </div>
          <h1 id="logo" className="text-4xl font-extrabold">
            Laivaly
          </h1>
        </div>

        {/* login, cart and search icon */}
        <div className="text-2xl flex items-center gap-8">
          <FiSearch className="cursor-pointer hover:scale-110 duration-700" />
          <IoBagHandleOutline className="cursor-pointer hover:scale-110 duration-700" />
          <BiUser className="cursor-pointer hover:scale-110 duration-700" />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
