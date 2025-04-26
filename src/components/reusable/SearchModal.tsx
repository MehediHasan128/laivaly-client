/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ChangeEvent, ReactNode, useState } from "react";
import { LuSearch } from "react-icons/lu";
import SearchProductCard from "./SearchProductCard";
import { ScrollArea } from "../ui/scroll-area";
import { RxCross2 } from "react-icons/rx";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";

type TSearch = {
  field: string;
  value: string;
};

const SearchModal = ({ child }: { child: ReactNode }) => {
  const [searchText, setSearchText] = useState<TSearch[]>([]);

  const { data: products } = useGetAllProductQuery(searchText);
  const productData = products?.data;

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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchText([
                    { field: "searchTerm", value: e.target.value },
                  ])
                }
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
        <DrawerFooter
          className={`${
            searchText[0]?.value.length > 0 ? "block" : "hidden"
          } mt-5 2xl:mt-10`}
        >
          <ScrollArea className="w-full h-full">
            <div className="grid grid-cols-2 2xl:grid-cols-5">
              {productData?.map((product: any) => (
                <SearchProductCard
                  key={product?._id}
                  thumbnail={product?.thumbnail}
                  title={product?.title}
                  price={product?.price}
                />
              ))}
            </div>
          </ScrollArea>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchModal;
