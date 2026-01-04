import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
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
      <DrawerOverlay />

      {/* Drawer trigger button */}
      <DrawerTrigger asChild>{children}</DrawerTrigger>

      {/* Main drawer content */}
      <DrawerContent className="">
        <div className="h-screen relative">
          <div className="absolute top-0">
            <DrawerTitle />
            <DrawerClose asChild className="w-[50%] h-[90px] cursor-pointer border">
              <button></button>
            </DrawerClose>
          </div>
          <nav>
            <NavItems />
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
