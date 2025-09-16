import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { Dispatch, ReactNode, SetStateAction } from "react";
import SearchProducts from "./SearchProducts";

interface TSearchDrawerProps {
  children: ReactNode;
  searchBarOpen?: boolean;
  setSearchBarOpen?: Dispatch<SetStateAction<boolean>>;
}

const Searchbar = ({
  children,
  searchBarOpen,
  setSearchBarOpen,
}: TSearchDrawerProps) => {
  return (
    <Drawer
      direction="top"
      open={searchBarOpen}
      onOpenChange={setSearchBarOpen}
    >
      {/* Drawer trigger button */}
      <DrawerTrigger asChild>{children}</DrawerTrigger>

      {/* Main drawer content */}
      <DrawerContent className="data-[vaul-drawer-direction=top]:min-h-[90vh]">
        {/* Drawer close button */}
        <DrawerTitle />
        <DrawerClose
          asChild
          className="absolute cursor-pointer right-5 top-5 size-6 md:size-8"
        >
          <X />
        </DrawerClose>

        {/* Search Input */}
        <div className="py-10">
          <SearchProducts />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Searchbar;
