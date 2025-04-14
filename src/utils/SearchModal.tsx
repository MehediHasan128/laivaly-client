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

      <DrawerContent className="pb-8">
        <DrawerHeader className="md:w-[70%] lg:w-[50%] mx-auto">
          <div className="relative">
            <Input
              type="text"
              name="searchText"
              placeholder="Search product"
              className="font-medium pr-16"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="text-2xl absolute top-0 right-0 rounded-r-lg h-full px-5 flex items-center">
              <LuSearch />
            </div>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchModal;
