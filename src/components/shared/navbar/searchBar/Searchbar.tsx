import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";

const Searchbar = ({ children }: { children: ReactNode }) => {
  return (
    <Drawer direction="top">
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

export default Searchbar;
