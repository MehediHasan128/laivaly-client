"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Dispatch, ReactNode, SetStateAction } from "react";

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
        <DrawerClose asChild className="w-[50%] h-20 cursor-pointer">
          <button></button>
        </DrawerClose>

        <div></div>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
