"use client";

import { RxCross2 } from "react-icons/rx";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";

const filters = [
  {
    field: "sort",
    accordianLabel: "Sort By",
    options: [
      {
        value: "-price",
        id: "highest-lowest",
        label: "Highest to Lowest Price",
      },
      {
        value: "price",
        id: "lowest-highest",
        label: "Lowest to Highest Price",
      },
    ],
  },
];




const FilterDrawer = ({ children, params, productFor }: { children: ReactNode, params: string[], productFor: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const handleProductFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`/products?${params.toString()}`);
  }

  const removeSingleFilter = (field: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(field);

    router.push(`/products?${params.toString()}`);
  }
  
  

  return (
    <Drawer direction="right">
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-xl py-10 px-24">
        <DrawerHeader className="flex flex-row justify-between items-center px-0">
          <DrawerTitle>Filter By</DrawerTitle>
          <DrawerClose className="cursor-pointer">
            <RxCross2 className="text-2xl" />
          </DrawerClose>
        </DrawerHeader>

        <div className="py-16">
          {filters.map((filter, idx) => (
            <Accordion key={idx} type="single" collapsible className="border-b">
              <AccordionItem value="sort">
                <AccordionTrigger className="focus:underline-none text-base cursor-pointer">
                  {filter.accordianLabel}
                </AccordionTrigger>

                <AccordionContent>
                  <RadioGroup
                    defaultValue={params.find((param) =>
                      filter.options.some((option) => option.value === param),
                    )}
                    onValueChange={(value) => {
                      handleProductFilter(filter.field, value);
                    }}
                  >
                    {filter.options.map((option, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 p-1.5 w-fit border cursor-pointer ${params.find((param) => param === option.value) ? "rounded-full" : "border-transparent"}`}
                      >
                        <RadioGroupItem value={option.value} id={option.id} />
                        <Label htmlFor={option.id}>{option.label}</Label>
                        {params.find((param) => param === option.value) && (
                          <div onClick={() => removeSingleFilter(filter.field)} className="border rounded-full p-1.5">
                            <RxCross2 />
                          </div>
                        )}
                      </div>
                    ))}
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <DrawerFooter>
          <button
            className="bg-black w-full rounded py-2.5 text-white active:scale-95 cursor-pointer duration-300"
          >
            Clear Filter
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
