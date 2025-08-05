"use client";

import { Search, ShoppingCart, UserRound } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);
  console.log(openSidebarMenu);
  return (
    <div className="navbar">
      {/* Sidebar */}
      <NavItems openSidebarMenu={openSidebarMenu} setOpenSidebarMenu={setOpenSidebarMenu}>
        <div className="item-flex cursor-pointer z-100" onClick={() => setOpenSidebarMenu(!openSidebarMenu)}>
          {/* Menubar */}
          <div
            className="flex flex-col gap-1.5 p-2"
          >
            <div
              className={`w-7 bg-black h-0.5 rounded-full duration-300 ${
                openSidebarMenu &&
                "transition-transform duration-500 origin-center rotate-45 translate-y-1"
              }`}
            />
            <div
              className={`w-7 bg-black h-0.5 rounded-full duration-300 ${
                openSidebarMenu &&
                "transition-transform duration-500 origin-center -rotate-45 -translate-y-1"
              }`}
            />
          </div>
          {/* Menu & Close text */}
          <div className="font-light h-5 w-12 item-flex overflow-hidden relative">
            <div
              className={`transition-transform duration-500 ${
                openSidebarMenu ? "-translate-y-3" : "translate-y-3"
              }`}
            >
              <p>Menu</p>
              <p>Close</p>
            </div>
          </div>
        </div>
      </NavItems>

      {/* Website logo */}
      <div>
        <Image
          src="/images/logo/logo.png"
          width={50}
          height={50}
          alt="laivaly-logo"
        />
      </div>

      {/* profile, search and cart icon */}
      <div className="item-flex gap-5">
        <div className="cursor-pointer">
          <Search width={20} />
        </div>
        <div className="cursor-pointer">
          <ShoppingCart width={20} />
        </div>
        <div className="cursor-pointer">
          <UserRound width={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
