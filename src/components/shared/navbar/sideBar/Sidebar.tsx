"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import NavItems from "./NavItems";

interface TSideDrawerProps {
  children: ReactNode;
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ children, openMenu, setOpenMenu }: TSideDrawerProps) => {
  const [direction, setDirection] = useState<"left" | "top">("left");

  useEffect(() => {
    const updateDirection = () => {
      if (window.innerWidth >= 1024) {
        setDirection("left");
      } else {
        setDirection("top");
      }
    };

    updateDirection();

    window.addEventListener("resize", updateDirection);

    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  return (
    <Drawer direction={direction} open={openMenu} onOpenChange={setOpenMenu}>
      {/* Drawer trigger button */}
      <DrawerTrigger asChild>{children}</DrawerTrigger>

      {/* Main drawer content */}
      <DrawerContent className="data-[vaul-drawer-direction=left]:lg:max-w-[30vw] data-[vaul-drawer-direction=left]:xl:max-w-[25vw] data-[vaul-drawer-direction=left]:2xl:max-w-[20vw] data-[vaul-drawer-direction=top]:max-h-[100vh] z-[90]">
        <div className="relative h-screen">
          <div className="absolute top-0 z-10 w-full">
            <DrawerTitle />
            <DrawerClose
              asChild
              className="w-14 md:w-full h-[60px] cursor-pointer"
            >
              <button></button>
            </DrawerClose>
          </div>
          <nav className="border-t md:border-none mt-[60px] md:mt-0">
            <NavItems drawerDirection={direction} setOpenMenu={setOpenMenu} />
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
