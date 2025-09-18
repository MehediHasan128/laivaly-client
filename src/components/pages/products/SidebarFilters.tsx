import { ReactNode } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Checkbox } from "../../ui/checkbox";

interface TSidebarFilters {
  children: ReactNode;
  filters: {
    title: string;
    field: string;
    options: {
      value: string;
      label: string;
    }[];
  }[];
}

const SidebarFilters = ({ children, filters }: TSidebarFilters) => {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="min-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>Filter Product</DrawerTitle>
        </DrawerHeader>

        <div className="px-5 overflow-scroll scrollbar-hide">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue={`${filters[0].title}`}
          >
            {filters?.map((filter) => (
              <AccordionItem key={filter.title} value={filter.title}>
                <AccordionTrigger className="text-md font-semibold">
                  {filter.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {filter?.options?.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 font-semibold"
                    >
                      <Checkbox id={option.value} />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <DrawerFooter>
          <DrawerClose asChild></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SidebarFilters;
