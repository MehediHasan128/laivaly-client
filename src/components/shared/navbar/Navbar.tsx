import NavItems from "./NavItems";
import { FiSearch } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import SignInModal from "@/pages/authentication/signIn/SignInModal";
import TooltipWrapper from "@/components/reusable/TooltipWrapper";
import { IoBagHandleOutline, IoMenu } from "react-icons/io5";
import logo from "../../../assets/images/logo/logo.png";
import SearchModal from "@/utils/SearchModal";
import { NavLink } from "react-router-dom";
import CartDrawer from "@/pages/cart/CartDrawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileMenu from "@/components/reusable/ProfileMenu";

const user = false;

const Navbar = () => {
  return (
    <div className="bg-[#EDF4F2] sticky top-0 z-10">
      <div className="flex justify-between items-center py-5 w-[90%] mx-auto">
        {/* Nav Item */}
        <div className="flex justify-center items-center">
          <NavItems child={<IoMenu />} />
        </div>

        {/* logo */}
        <NavLink to="/" className="w-full">
          <div className="flex justify-center items-center gap-3">
            <div className="size-9 md:size-12 xl:size-11 2xl:size-12">
              <img src={logo} alt="Laivaly" />
            </div>
            <h1
              id="logo"
              className="text-2xl md:text-4xl font-extrabold text-[#31473A]"
            >
              Laivaly
            </h1>
          </div>
        </NavLink>

        {/* login, cart and search icon */}
        <div className="flex items-center gap-4 text-xl md:gap-6 md:text-3xl xl:gap-7 xl:text-2xl 2xl:gap-8">
          {/* Search Icon */}
          <div>
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
          </div>
          {/* Cart Icon */}
          <div>
            <CartDrawer
              child={
                <TooltipWrapper
                  child={
                    <IoBagHandleOutline className="cursor-pointer hover:scale-110 duration-700" />
                  }
                  name="Cart"
                />
              }
            />
          </div>
          {/* User Icon */}
          <div className={`${user ? "hidden" : "block"}`}>
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
          {/* Avatar */}
          <div className={`${user ? "block" : "hidden"}`}>
            <ProfileMenu>
              <Avatar className="hidden md:block md:size-12 rounded-full">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </ProfileMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
