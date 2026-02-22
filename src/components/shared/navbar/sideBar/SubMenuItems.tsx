import {
  MenubarSub,
  MenubarSubTrigger,
} from "@/components/ui/menubar";
import { Dispatch, SetStateAction, useState } from "react";
import { TNavItems, TNavItemsChildren } from "./Items";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import TertiaryMenuItems from "./TertiaryMenuItems";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const SubMenuItems = ({
  subMenu,
  setOpenMenu,
  drawerDirection,
}: {
  subMenu: TNavItems;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  drawerDirection: "left" | "top";
}) => {
  const [subMenuHoverIndex, setSubMenuHoverIndex] = useState<string | null>(
    null,
  );
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState<string | null>(
    null,
  );

  const subMenuItems = subMenu[0]?.children;

  let tertiaryMenu;
  if (subMenuItems) {
    tertiaryMenu = subMenuItems?.filter(
      (item) => item.id === selectedSubMenuItem,
    );
  }

  return (
    <>
      {drawerDirection === "left" && (
        <MenubarSub>
          <div className="w-full flex flex-col items-start py-16 h-screen">
            {subMenuItems?.map((item) =>
              item.type === "mega-menu" ? (
                <MenubarSubTrigger
                  key={item.id}
                  className="cursor-pointer flex justify-between items-center py-2 w-full group 2xl:px-10"
                  onMouseEnter={() => {
                    setSubMenuHoverIndex(item.id);
                    setSelectedSubMenuItem(item.id);
                  }}
                  onMouseLeave={() => setSubMenuHoverIndex(null)}
                >
                  <div
                    className={`overflow-hidden duration-500 ${
                      subMenuHoverIndex === null ||
                      subMenuHoverIndex === item.id
                        ? "text-black"
                        : "text-gray-500"
                    }`}
                  >
                    <h1 className="text-base font-medium">{item.label}</h1>
                    <div className="h-[1px] bg-black w-full transition-transform -translate-x-64 group-hover:translate-x-0 duration-300" />
                  </div>
                  <ChevronRight
                    className={`opacity-0 size-5 duration-700 ${
                      subMenuHoverIndex === item.id && "opacity-100"
                    }`}
                  />
                </MenubarSubTrigger>
              ) : (
                <div
                  key={item.id}
                  className="cursor-pointer  flex justify-between items-center py-2 w-full group 2xl:px-10"
                  onMouseEnter={() => setSubMenuHoverIndex(item.id)}
                  onMouseLeave={() => setSubMenuHoverIndex(null)}
                >
                  <Link
                    href={"/login"}
                    className={`overflow-hidden duration-500 ${
                      subMenuHoverIndex === null ||
                      subMenuHoverIndex === item.id
                        ? "text-black"
                        : "text-gray-500"
                    }`}
                    onClick={() => setOpenMenu(false)}
                  >
                    <h1 className="text-base font-medium">{item.label}</h1>
                    <div className="h-[1px] bg-black w-full transition-transform -translate-x-64 group-hover:translate-x-0 duration-300" />
                  </Link>
                </div>
              ),
            )}
          </div>

          <TertiaryMenuItems
            tertiaryMenu={tertiaryMenu as TNavItemsChildren}
            setOpenMenu={setOpenMenu}
            drawerDirection={drawerDirection}
          />
        </MenubarSub>
      )}
      {drawerDirection === "top" && (
        <div className="min-h-screen">
          <Drawer direction="left">
            <div className="w-full flex flex-col items-start p-10 h-screen">
              {subMenuItems?.map((item) =>
                item.type === "mega-menu" ? (
                  <DrawerTrigger
                    key={item.id}
                    className="cursor-pointer flex justify-between items-center py-2 w-full group 2xl:px-10"
                    onMouseEnter={() => {
                      setSubMenuHoverIndex(item.id);
                      setSelectedSubMenuItem(item.id);
                    }}
                    onMouseLeave={() => setSubMenuHoverIndex(null)}
                  >
                    <div
                      className={`overflow-hidden duration-500 ${
                        subMenuHoverIndex === null ||
                        subMenuHoverIndex === item.id
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                    >
                      <h1 className="text-base font-medium">{item.label}</h1>
                      <div className="h-[1px] bg-black w-full transition-transform -translate-x-64 group-hover:translate-x-0 duration-300" />
                    </div>
                    <ChevronRight
                      className={`opacity-0 size-5 duration-700 ${
                        subMenuHoverIndex === item.id && "opacity-100"
                      }`}
                    />
                  </DrawerTrigger>
                ) : (
                  <div
                    key={item.id}
                    className="cursor-pointer  flex justify-between items-center py-2 w-full group 2xl:px-10"
                    onMouseEnter={() => setSubMenuHoverIndex(item.id)}
                    onMouseLeave={() => setSubMenuHoverIndex(null)}
                  >
                    <Link
                      href={"/login"}
                      className={`overflow-hidden duration-500 ${
                        subMenuHoverIndex === null ||
                        subMenuHoverIndex === item.id
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                      onClick={() => setOpenMenu(false)}
                    >
                      <h1 className="text-base font-medium">{item.label}</h1>
                      <div className="h-[1px] bg-black w-full transition-transform -translate-x-64 group-hover:translate-x-0 duration-300" />
                    </Link>
                  </div>
                ),
              )}
            </div>

            <DrawerContent className="z-[120] data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-full data-[vaul-drawer-direction=left]:sm:max-w-full">
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

                <TertiaryMenuItems
                  tertiaryMenu={tertiaryMenu as TNavItemsChildren}
                  setOpenMenu={setOpenMenu}
                  drawerDirection={drawerDirection}
                />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </>
  );
};

export default SubMenuItems;
