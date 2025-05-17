import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
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
  { label: "Men", path: "/mens" },
  { label: "Women", path: "/womens" },
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

      <DrawerTrigger className="text-3xl md:text-4xl rounded-full cursor-pointer hover:scale-110 duration-500">
        {child}
      </DrawerTrigger>

      {/* Drawer Content */}
      <DrawerContent>
        {/* Drawer Header */}
        <DrawerHeader>
          {/* Close button */}
          <DrawerClose className="hidden lg:flex">
            <div className="text-3xl bg-gray-300 p-1.5 rounded-full cursor-pointer hover:scale-90 duration-500 w-fit">
              <RxCross2 />
            </div>
          </DrawerClose>
        </DrawerHeader>

        {/* Nav items */}
        <DrawerTitle>
          <div className="flex flex-col md:text-xl font-medium">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "hover:translate-x-3 duration-1000 text-[#337a51] font-medium"
                    : "hover:translate-x-3 duration-1000 font-medium"
                }
              >
                <DrawerClose className="w-full h-full py-4 px-10 md:px-16 text-start cursor-pointer">
                  {item.label}
                </DrawerClose>
              </NavLink>
            ))}
          </div>

          <div className="flex md:hidden flex-grow border-t border-gray-300 my-5"></div>
        </DrawerTitle>

        {/* Drwaer footer */}
        <DrawerFooter className="block md:hidden bg-gray-100">
          <div className="flex items-center gap-1.5">
            <Avatar className="rounded size-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold">Mehedi Hasan</h1>
              <p className="text-xs">mehedihasan12926@gmail.com</p>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavItems;
