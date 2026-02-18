import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { navItems, TNavItems } from "./Items";
import { ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import SubMenuItems from "./SubMenuItems";
import Image from "next/image";

const NavItems = ({
  drawerDirection,
  setOpenMenu,
}: {
  drawerDirection: "left" | "top";
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const [hoverIndex, setHoverIndex] = useState<string | null>(null);

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const subMenu = navItems.filter(
    (item) => item.id === selectedItem,
  ) as TNavItems;

  return (
    <>
      <Menubar className="shadow-none border-none h-screen">
        <MenubarMenu>
          <div className="w-full flex flex-col items-start py-16 h-screen">
            {navItems.map((item) =>
              item.type === "mega-menu" ? (
                <MenubarTrigger
                  key={item.id}
                  className="cursor-pointer flex justify-between items-center py-2 w-full group 2xl:px-10"
                  onMouseEnter={() => setHoverIndex(item.id)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => setSelectedItem(item.id)}
                >
                  <div
                    className={`overflow-hidden duration-500 ${
                      hoverIndex === null || hoverIndex === item.id
                        ? "text-black"
                        : "text-gray-500"
                    }`}
                  >
                    <h1 className="text-xl font-normal">{item.label}</h1>
                    <div className="h-[1px] bg-black w-full transition-transform -translate-x-64 group-hover:translate-x-0 duration-300" />
                  </div>
                  <ChevronRight
                    className={`opacity-0 duration-700 ${
                      hoverIndex === item.id && "opacity-100"
                    }`}
                  />
                </MenubarTrigger>
              ) : (
                <div
                  key={item.id}
                  className="cursor-pointer flex justify-between items-center py-2 w-full group 2xl:px-10"
                  onMouseEnter={() => setHoverIndex(item.id)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <Link
                    href={"/login"}
                    className={`overflow-hidden duration-500 ${
                      hoverIndex === null || hoverIndex === item.id
                        ? "text-black"
                        : "text-gray-500"
                    }`}
                    onClick={() => setOpenMenu(false)}
                  >
                    <h1 className="text-xl">{item.label}</h1>
                    <div className="h-[1px] bg-black w-full transition-transform -translate-x-64 group-hover:translate-x-0 duration-300" />
                  </Link>
                </div>
              ),
            )}
          </div>

          <MenubarContent
            side="right"
            align="start"
            sideOffset={0}
            alignOffset={-1000}
            className="h-[100vh] rounded-none w-[25vw] border-none shadow-none p-0"
          >
            {subMenu[0]?.img && (
              <div>
                <div className="relative w-full h-72">
                  <Image src={subMenu[0]?.img} alt={subMenu[0]?.label} fill />
                </div>
              </div>
            )}
            <SubMenuItems subMenu={subMenu} setOpenMenu={setOpenMenu} />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default NavItems;