"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Dispatch, ReactNode, SetStateAction } from "react";
import NavItems from "./NavItems";

interface TSideDrawerProps {
  children: ReactNode;
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ children, openMenu, setOpenMenu }: TSideDrawerProps) => {
  return (
    <Drawer direction="left" open={openMenu} onOpenChange={setOpenMenu}>
      {/* Drawer trigger button */}
      <DrawerTrigger asChild>{children}</DrawerTrigger>

      {/* Main drawer content */}
      <DrawerContent>
        {/* Drawer close button */}
        <DrawerTitle />
        <DrawerClose asChild className="w-[50%] h-[90px] cursor-pointer">
          <button></button>
        </DrawerClose>

        {/* Main nav bar */}
        <div className="p-10">
          <nav className="font-medium text-xl">
            <NavItems />
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
