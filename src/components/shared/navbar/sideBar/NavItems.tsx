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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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
      {drawerDirection === "left" && (
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
              <SubMenuItems
                subMenu={subMenu}
                setOpenMenu={setOpenMenu}
                drawerDirection={drawerDirection}
              />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )}

      {drawerDirection === "top" && (
        <Drawer direction="right">
          <div className="w-full flex flex-col items-start p-10 h-screen">
            {navItems.map((item) =>
              item.type === "mega-menu" ? (
                <DrawerTrigger
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
                </DrawerTrigger>
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

          <DrawerContent className="z-[100] data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-full data-[vaul-drawer-direction=right]:sm:max-w-full ">
            <div className="relative min-h-screen flex flex-col">
              <div className="absolute top-0 z-10 w-full">
                <DrawerTitle />
                <DrawerClose
                  asChild
                  className="w-14 md:w-full h-[60px] cursor-pointer"
                  onClick={() => setOpenMenu(false)}
                >
                  <button></button>
                </DrawerClose>
              </div>

              <div className="mt-[60px]">
                {subMenu[0]?.img && (
                  <div>
                    <div className="relative w-full h-72">
                      <Image
                        src={subMenu[0]?.img}
                        alt={subMenu[0]?.label}
                        fill
                      />
                    </div>
                  </div>
                )}
              </div>

              <SubMenuItems
                subMenu={subMenu}
                setOpenMenu={setOpenMenu}
                drawerDirection={drawerDirection}
              />
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default NavItems;
