"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { X } from "lucide-react";
import EditPasswordForm from "./EditPasswordForm";

const EditPasswordDrawer = ({ children }: { children: ReactNode }) => {
  const [direction, setDirection] = useState<"right" | "bottom">("bottom");
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  useEffect(() => {
    const updateDirection = () => {
      if (window.innerWidth >= 1024) {
        setDirection("right");
      } else {
        setDirection("bottom");
      }
    };

    updateDirection();

    window.addEventListener("resize", updateDirection);

    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  return (
    <Drawer direction={direction} open={openDrawer} onOpenChange={setOpenDrawer}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-xl pb-10 xl:pb-0">
        <DrawerHeader className="relative">
          <DrawerTitle className="text-center py-3 md:py-5">
            Update Password
          </DrawerTitle>
          <DrawerClose className="absolute top-0 right-0 p-5 cursor-pointer">
            <X />
          </DrawerClose>
        </DrawerHeader>

        <div className="h-full flex justify-center items-center">
          <div className="md:w-[45%] lg:w-[60%] xl:w-[70%] space-y-8">
            <div>
                <h1 className="text-2xl font-semibold">Change Password</h1>
                <p className="text-sm text-gray-700 font-semibold">Update password for enhanced account security.</p>
            </div>
            <EditPasswordForm drawerOpen={setOpenDrawer} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default EditPasswordDrawer;
