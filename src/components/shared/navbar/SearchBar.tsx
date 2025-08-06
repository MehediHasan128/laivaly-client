"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Search, X } from "lucide-react";
import { Oswald } from "next/font/google";
import { ReactNode, useState } from "react";

const logoStyle = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

const SearchBar = ({ children }: { children: ReactNode }) => {

  const [searchText, setSearchText] = useState<string | null>(null);
  console.log(searchText);

  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className={`${logoStyle.className} text-4xl font-bold`}>Laivaly</DrawerTitle>
          <div className="w-[70%] xl:w-[50%] 2xl:w-[40%] mx-auto mt-1 mb-10 relative">
            <input
              type="text"
              placeholder="Search for Pre Order"
              className="search-input"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="cursor-pointer absolute top-0 right-0 px-5 h-full item-flex">
              <Search width={20} />
            </div>
          </div>
        </DrawerHeader>

            {/* Search Product Card */}
            <div className="mb-4 overflow-auto scrollbar-hide">
                
            </div>

        <DrawerClose className="absolute top-0 right-0 p-3 cursor-pointer">
          <X />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchBar;
