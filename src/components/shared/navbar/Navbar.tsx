"use client";

import { Search, ShoppingCart, UserRound } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);

  return (
    <div className="navbar">
      {/* Sidebar */}
      <NavItems>
        <div className="item-flex gap-1">
          {/* Menubar */}
          <div
            className="flex flex-col gap-2 cursor-pointer p-2"
            onClick={() => setOpenSidebarMenu(!openSidebarMenu)}
          >
            <div
              className={`w-8 bg-black h-0.5 rounded-full duration-300 ${
                openSidebarMenu &&
                "transition-transform duration-300 origin-center rotate-45 translate-y-1.5"
              }`}
            />
            <div
              className={`w-8 bg-black h-0.5 rounded-full duration-300 ${
                openSidebarMenu &&
                "transition-transform duration-300 origin-center -rotate-45 -translate-y-1.5"
              }`}
            />
          </div>
          {/* Menu & Close text */}
          <div className="font-light h-5 w-12 item-flex overflow-hidden relative">
            <div
              className={`transition-transform duration-300 ${
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
      <div className="item-flex gap-8">
        <div className="cursor-pointer">
          <Search />
        </div>
        <div className="cursor-pointer">
          <ShoppingCart />
        </div>
        <div className="cursor-pointer">
          <UserRound />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
