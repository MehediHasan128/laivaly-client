import NavItems from "./NavItems";
import { FiSearch } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import SignIn from "@/pages/authentication/signIn/SignIn";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { IoBagHandleOutline, IoMenu } from "react-icons/io5";
import logo from "../../../assets/images/logo/lBlack160.png";

const Navbar = () => {
  return (
    <div className="bg-[#EDF4F2] fixed w-full">
      <div className="flex justify-between items-center py-5 w-[90%] mx-auto">
        {/* Nav Item */}
        <div>
          <NavItems child={<IoMenu />} />
        </div>

        {/* logo */}
        <div className="flex justify-center items-center gap-3 w-full">
          <div className="size-9 md:size-12">
            <img src={logo} alt="Laivaly" />
          </div>
          <h1 id="logo" className="text-3xl md:text-4xl font-extrabold">
            Laivaly
          </h1>
        </div>

        {/* login, cart and search icon */}
        <div className="text-2xl hidden md:flex items-center gap-8">
          <TooltipWrapper
            child={
              <FiSearch className="cursor-pointer hover:scale-110 duration-700" />
            }
            name="Search"
          />
          <TooltipWrapper
            child={
              <IoBagHandleOutline className="cursor-pointer hover:scale-110 duration-700" />
            }
            name="Cart"
          />
          <SignIn
            child={
              <TooltipWrapper
                child={
                  <LuUserRound className="cursor-pointer hover:scale-110 duration-700" />
                }
                name="User"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
