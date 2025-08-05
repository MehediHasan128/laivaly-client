"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

const NavItems = ({
  children,
  openSidebarMenu,
  setOpenSidebarMenu,
}: {
  children: ReactNode;
  openSidebarMenu: boolean;
  setOpenSidebarMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log(openSidebarMenu);
  return (
    <>
      <Drawer
      open={openSidebarMenu} onOpenChange={setOpenSidebarMenu}
        direction="left"
      >
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DialogTitle></DialogTitle>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavItems;
