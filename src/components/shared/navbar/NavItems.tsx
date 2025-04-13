import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "New In", path: "/newIn" },
  { label: "Men", path: "/men" },
  { label: "Women", path: "/women" },
  { label: "Children", path: "/children" },
  { label: "Handbags", path: "/handbags" },
  { label: "Travel", path: "/travel" },
  { label: "Lifestyle", path: "/lifestyle" },
  { label: "Jewelry & Watches", path: "/jewelry&Watches" },
  { label: "Fragrances & Make-Up", path: "/fragrances&Make-Up" },
];

const NavItems = ({ child }: { child: ReactNode }) => {
  return (
    <Drawer>
      <DrawerOverlay />

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
            <div className="lg:my-10 px-5 lg:px-20 flex flex-col text-start md:text-xl">
              {navItems.map((item) => (
                <NavLink
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "hover:translate-x-3 duration-1000 text-[#337a51] py-4 font-medium md:font-bold"
                      : "hover:translate-x-3 duration-1000 py-4"
                  }
                >
                  <DrawerClose>{item.label}</DrawerClose>
                </NavLink>
              ))}
            </div>

            <div className="flex md:hidden flex-grow border-t border-gray-300 my-5"></div>

          
          </DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default NavItems;
