import { MenubarItem, MenubarSubContent } from "@/components/ui/menubar";
import { TNavItemsChildren } from "./Items";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const TertiaryMenuItems = ({
  tertiaryMenu,
  setOpenMenu,
  drawerDirection
}: {
  tertiaryMenu: TNavItemsChildren;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  drawerDirection?: "left" | "top";
}) => {
  const tertiaryMenuItems = tertiaryMenu && tertiaryMenu[0]?.items;

  return (
    <>
      {drawerDirection === "left" && (
        <MenubarSubContent
          sideOffset={0}
          alignOffset={-1000}
          className="h-[100vh] rounded-none w-[20vw] shadow-none p-0 border-l py-16"
        >
          {tertiaryMenuItems?.map((item, idx) => (
            <Link
              key={idx}
              href={`/products?${item?.href}`}
              onClick={() => setOpenMenu(false)}
            >
              <MenubarItem className="cursor-pointer flex justify-between items-center py-2 w-full group 2xl:px-10 text-base font-medium">
                {item.label}
              </MenubarItem>
            </Link>
          ))}
        </MenubarSubContent>
      )}
      {drawerDirection === "top" && (
        <div className="h-[100vh] rounded-none shadow-none p-10 mt-[60px] border-t ">
          {tertiaryMenuItems?.map((item, idx) => (
            <Link
              key={idx} 
              href={`/products?${item?.href}`}
              onClick={() => setOpenMenu(false)}
            >
              <span className="cursor-pointer flex justify-between items-center py-2 w-full group 2xl:px-10 text-base font-medium">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default TertiaryMenuItems;