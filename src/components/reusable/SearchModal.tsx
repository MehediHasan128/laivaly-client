import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ReactNode, useState } from "react";
import { LuSearch } from "react-icons/lu";
import SearchProductCard from "./SearchProductCard";
import { ScrollArea } from "../ui/scroll-area";
import { RxCross2 } from "react-icons/rx";

const SearchModal = ({ child }: { child: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  console.log(searchTerm);

  return (
    <Drawer direction="top">
      <DrawerTrigger className="flex">{child}</DrawerTrigger>

      <DrawerContent className="md:py-5">
        <DrawerHeader className="md:w-[80%] md:mx-auto xl:w-[60%] 2xl:w-[60%] relative">
          <div className="relative w-full">
            <div className="relative w-[90%]">
              <Input
                type="text"
                name="searchText"
                placeholder="Search product"
                className="pr-16 text-sm md:text-base font-medium"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="text-xl md:text-2xl absolute top-0 right-0 rounded-r-lg h-full px-5 flex items-center">
                <LuSearch />
              </div>
            </div>
            <div className="hidden absolute top-0 right-0 w-[10%] h-full xl:flex justify-center items-center text-2xl 2xl:text-3xl">
              <DrawerClose className="bg-gray-100 p-1 2xl:p-2 rounded-full">
                <RxCross2 />
              </DrawerClose>
            </div>
          </div>
        </DrawerHeader>
        <DrawerFooter className="p-0 h-[80vh] mt-5 2xl:mt-10">
          <ScrollArea className="w-full h-full">
            <div className="grid grid-cols-2 2xl:grid-cols-5">
              {[...Array(11)].map((i) => (
                <SearchProductCard key={i} />
              ))}
            </div>
          </ScrollArea>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchModal;
