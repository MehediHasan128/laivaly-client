import { DrawerClose } from "@/components/ui/drawer";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Menubar } from "@radix-ui/react-menubar";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface TProductCategrory {
  category: string;
  value: string;
}

interface TProductGroup {
  group: string;
  value: string;
  productCategrory: TProductCategrory[];
}

interface TNavItems {
  label: string;
  value: string;
  productGroup: TProductGroup[];
}

const navItems = [
  { label: "New Collection", path: "/products/new" },
  { label: "Men", path: "/products/men" },
  { label: "Women", path: "/products/women" },
  { label: "Kid's", path: "/products/kids" },
  { label: "Winter", path: "/products/winter" },
];

const items = [
  {
    label: "Women",
    value: "women",
    productGroup: [
      {
        group: "Ready to Wear",
        value: "cloth",
        productCategrory: [
          {
            category: "Tops",
            value: "tops",
          },
        ],
      },
    ],
  },
];

const NavItems = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="w-full flex flex-col items-start 2xl:px-16 py-16 h-screen">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer flex items-center justify-between py-2 2xl:py-3 group w-full"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div
                  className={`w-fit overflow-hidden duration-700 ${
                    hoverIndex === null || hoverIndex === index
                      ? "text-black"
                      : "text-gray-500"
                  }`}
                >
                  <h1 className="text-lg">{item.label}</h1>
                  <div className="h-[1px] bg-black w-full transition-transform -translate-x-64 group-hover:translate-x-0 duration-300" />
                </div>
                <ChevronRight
                  className={`opacity-0 duration-700 ${
                    hoverIndex === index && "opacity-100"
                  }`}
                />
              </div>
            ))}
          </MenubarTrigger>
          <MenubarContent
            side="right"
            align="start"
            sideOffset={0}
            alignOffset={-9999}
            className="h-[100vh] rounded-none w-[20vw] border-none px-10 shadow-none py-16"
          >
            <MenubarItem>New Window</MenubarItem>
            <MenubarItem>Share</MenubarItem>
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default NavItems;
