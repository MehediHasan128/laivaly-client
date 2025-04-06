import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";
import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "New In", path: "/newIn" },
  { label: "Handbags", path: "/handbags" },
  { label: "Women", path: "/women" },
  { label: "Men", path: "/men" },
  { label: "Children", path: "/children" },
  { label: "Travel", path: "/travel" },
  { label: "Jewelry & Watches", path: "/jewelry&Watches" },
  { label: "Lifestyle", path: "/lifestyle" },
  { label: "Fragrances & Make-Up", path: "/fragrances&Make-Up" },
  { label: "Gifts", path: "/gifts" },
];

const NavItems = ({ child }: { child: ReactNode }) => {
  return (
    <Drawer>
      <DrawerTrigger className="text-4xl rounded-full cursor-pointer hover:scale-110 duration-500">
        {child}
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          {/* Close button */}
          <DrawerClose className="hidden lg:flex">
            <div className="text-3xl bg-gray-300 p-1.5 rounded-full cursor-pointer hover:scale-90 duration-500 w-fit">
              <RxCross2 />
            </div>
          </DrawerClose>

          {/* Nav items */}
          <DrawerTitle>
            <div className="lg:my-10 px-10 lg:px-20 flex flex-col text-start space-y-7 md:text-xl font-light">
              {navItems.map((item) => (
                <NavLink
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-500"
                      : "hover:translate-x-3 duration-700"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex md:hidden flex-grow border-t border-gray-300 my-10"></div>

            <div className="px-10 font-light md:text-xl gap-5 space-y-5 md:hidden">
              <div className="flex items-center gap-1.5">
                <FiSearch className="cursor-pointer hover:scale-110 duration-700" />
                <h1>Search</h1>
              </div>
              <div className="flex items-center gap-1.5">
                <IoBagHandleOutline className="cursor-pointer hover:scale-110 duration-700" />
                <h1>Cart</h1>
              </div>
              <div className="flex items-center gap-1.5">
                <BiUser className="cursor-pointer hover:scale-110 duration-700" />
                <h1>User</h1>
              </div>
            </div>
          </DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default NavItems;
