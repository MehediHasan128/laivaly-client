import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ReactNode, useState } from "react";
import { LuSearch } from "react-icons/lu";

const SearchModal = ({ child }: { child: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  console.log(searchTerm);

  return (
    <Drawer direction="top">
      <DrawerTrigger className="flex">{child}</DrawerTrigger>

      <DrawerContent className="md:py-5">
        <DrawerHeader className="md:w-[80%] md:mx-auto xl:w-[60%] 2xl:w-[50%]">
          <div className="relative">
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
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchModal;
