"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React, { ReactNode } from "react";
import NavItems from "./NavItems";

const Sidenab = ({
  children,
  openSidebarMenu,
  setOpenSidebarMenu,
}: {
  children: ReactNode;
  openSidebarMenu: boolean;
  setOpenSidebarMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Drawer
      open={openSidebarMenu}
      onOpenChange={setOpenSidebarMenu}
      direction="left"
    >
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        <div className="mt-28">
          <div className="w-[75%] xl:w-[60%] mx-auto">
            <nav className="flex flex-col space-y-2">
              <NavItems />
            </nav>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidenab;
