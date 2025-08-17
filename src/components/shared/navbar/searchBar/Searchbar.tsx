import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Search, X } from "lucide-react";
import { Smooch_Sans } from "next/font/google";
import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";

const smoochsans = Smooch_Sans({
  subsets: ["latin"],
  variable: "--font-smoochsans",
});

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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchBarOpen) {
      inputRef.current?.focus();
    }
  }, [searchBarOpen]);

  return (
    <Drawer
      direction="top"
      open={searchBarOpen}
      onOpenChange={setSearchBarOpen}
    >
      {/* Drawer trigger button */}
      <DrawerTrigger asChild>{children}</DrawerTrigger>

      {/* Main drawer content */}
      <DrawerContent className="data-[vaul-drawer-direction=top]:min-h-[80vh]">
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
          <div className="w-[90%] md:w-[80%] lg:w-[60%] 2xl:w-[45%] mx-auto text-center">
            <h1 className={`${smoochsans.className} font-bold text-5xl`}>
              Laivaly
            </h1>
            <div className="relative mt-3">
              <input
                type="text"
                ref={inputRef}
                placeholder="Search for Pre Order"
                className="border rounded-full w-full outline-none focus:border-black text-sm md:text-base px-5 py-3"
              />
              <span className="absolute top-0 right-0 flex items-center h-full px-5">
                <Search />
              </span>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Searchbar;
