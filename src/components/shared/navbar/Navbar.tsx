import NavItems from "./NavItems";
import { FiSearch } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import SignInModal from "@/pages/authentication/signIn/SignInModal";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { IoBagHandleOutline, IoMenu } from "react-icons/io5";
import logo from "../../../assets/images/logo/logo.png";
import Cart from "@/pages/cart/Cart";
import SearchModal from "@/utils/SearchModal";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#EDF4F2] sticky top-0 z-10">
      <div className="flex justify-between items-center py-5 w-[90%] mx-auto">
        {/* Nav Item */}
        <div>
          <NavItems child={<IoMenu />} />
        </div>

        {/* logo */}
        <NavLink to="/" className="w-full">
          <div className="flex justify-center items-center gap-3">
            <div className="size-9 md:size-12">
              <img src={logo} alt="Laivaly" />
            </div>
            <h1
              id="logo"
              className="text-3xl md:text-4xl font-extrabold text-[#31473A]"
            >
              Laivaly
            </h1>
          </div>
        </NavLink>

        {/* login, cart and search icon */}
        <div className="text-2xl hidden md:flex items-center gap-8">
          <SearchModal
            child={
              <TooltipWrapper
                child={
                  <FiSearch className="cursor-pointer hover:scale-110 duration-700" />
                }
                name="Search"
              />
            }
          />
          <Cart
            child={
              <TooltipWrapper
                child={
                  <IoBagHandleOutline className="cursor-pointer hover:scale-110 duration-700" />
                }
                name="Cart"
              />
            }
          />
          <SignInModal
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
