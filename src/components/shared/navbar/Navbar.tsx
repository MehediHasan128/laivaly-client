"use client";

import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Sidenab from "./Sidenab";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);

  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="flex items-center gap-5">
        <Sidenab
          openSidebarMenu={openSidebarMenu}
          setOpenSidebarMenu={setOpenSidebarMenu}
        >
          <div
            className={`item-flex cursor-pointer ${openSidebarMenu && "z-100"}`}
            onClick={() => setOpenSidebarMenu(!openSidebarMenu)}
          >
            {/* Menubar */}
            <div className="flex flex-col gap-1 p-2">
              <div
                className={`w-6 md:w-7 bg-black h-0.5 rounded-full duration-300 ${
                  openSidebarMenu &&
                  "transition-transform duration-500 origin-center rotate-45 translate-y-[3px]"
                }`}
              />
              <div
                className={`w-6 md:w-7 bg-black h-0.5 rounded-full duration-300 ${
                  openSidebarMenu &&
                  "transition-transform duration-500 origin-center -rotate-45 -translate-y-[3px]"
                }`}
              />
              <div
                className={`w-6 md:w-7 bg-black h-0.5 rounded-full duration-300 ${
                  openSidebarMenu && "hidden"
                }`}
              />
            </div>
            {/* Menu & Close text */}
            <div className="hidden md:flex font-light h-5 w-12 item-flex overflow-hidden relative">
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
        </Sidenab>
        <SearchBar>
          <div className="hidden md:flex item-flex gap-2 cursor-pointer font-light">
            <div className="cursor-pointer">
              <Search width={20} />
            </div>
            <p>Search</p>
          </div>
        </SearchBar>
      </div>

      {/* Website logo */}
      <Link href="/">
        <Image
          src="/images/logo/logo.png"
          width={50}
          height={50}
          alt="laivaly-logo"
          className="w-10 md:w-14"
        />
      </Link>

      {/* profile, search and cart icon */}
      <div className="item-flex gap-5">
        <Link href="/wishlist">
          <div className="cursor-pointer hidden md:block">
            <Heart width={20} />
          </div>
        </Link>
        <Link href="/cart">
          <div className="cursor-pointer">
            <ShoppingCart width={20} />
          </div>
        </Link>
        <div className="cursor-pointer">
          <UserRound width={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
