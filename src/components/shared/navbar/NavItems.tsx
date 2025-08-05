"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

const NavItems = ({ children }: { children: ReactNode }) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DialogTitle></DialogTitle>
        <h1>Hello</h1>
      </DrawerContent>
    </Drawer>
  );
};

export default NavItems;
