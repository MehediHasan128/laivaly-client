import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { LuSearch } from "react-icons/lu";

const SearchModal = ({ child }: { child: ReactNode }) => {
  return (
    <Drawer direction="top">
      <DrawerTrigger className="flex">{child}</DrawerTrigger>

      <DrawerContent className="pb-8">
        <DrawerHeader className="md:w-[70%] lg:w-[50%] mx-auto">
          <form>
            <div className="relative">
              <Input
                type="text"
                name="searchText"
                placeholder="Search product"
                className="font-medium pr-16"
              />
              <div className="text-2xl absolute top-0 right-0 rounded-r-lg h-full px-5 flex items-center">
                <LuSearch />
              </div>
            </div>
          </form>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchModal;
