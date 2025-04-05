import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";
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
      <DrawerTrigger className="text-3xl bg-gray-100 p-1.5 rounded-full cursor-pointer hover:scale-110 duration-500">
        {child}
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <DrawerClose>
              <div className="text-3xl bg-gray-300 p-1.5 rounded-full cursor-pointer hover:scale-90 duration-500">
                <RxCross2 />
              </div>
            </DrawerClose>

            <div className="my-10 px-20 flex flex-col text-start space-y-7 text-xl font-light">
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
          </DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default NavItems;
