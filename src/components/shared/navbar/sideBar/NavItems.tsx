import { DrawerClose } from "@/components/ui/drawer";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "New Collection", path: "/products/new" },
  { label: "Men", path: "/products/men" },
  { label: "Women", path: "/products/women" },
  { label: "Kid's", path: "/products/kids" },
  { label: "Winter", path: "/products/winter" },
];

const NavItems = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <>
      {navItems.map((item, index) => (
        <DrawerClose key={index} asChild>
          <Link href={item?.path}>
            <div
              className="cursor-pointer flex items-center justify-between py-2 2xl:py-3 group"
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
                <h1 className="font-light text-lg">{item.label}</h1>
                <div className="h-[1px] bg-black w-full transition-transform -translate-x-64 group-hover:translate-x-0 duration-500" />
              </div>
              <ChevronRight
                className={`opacity-0 duration-700 ${
                  hoverIndex === index && "opacity-100"
                }`}
              />
            </div>
          </Link>
        </DrawerClose>
      ))}
    </>
  );
};

export default NavItems;
