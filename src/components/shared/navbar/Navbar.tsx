/* eslint-disable @next/next/no-img-element */
"use client";

import { Handbag, Heart, Search, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./sideBar/Sidebar";
import Searchbar from "./searchBar/Searchbar";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header>
      <div className="navbar">
        {/* Menu bar and search button */}
        <div className="flex-item-center">
          {/* Menubar */}
          <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu}>
            <div
              className={`cursor-pointer flex-item-center p-1 ${openMenu && "z-100"}`}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <div className="space-y-1">
                <div
                  className={`h-0.5 rounded-full bg-black w-8 transition-transform duration-500 ${
                    openMenu && "origin-center rotate-45 translate-y-[3px]"
                  }`}
                />
                <div
                  className={`h-0.5 rounded-full bg-black w-8 transition-transform duration-500 ${
                    openMenu && "origin-center -rotate-45 -translate-y-[3px]"
                  }`}
                />
                <div
                  className={`h-0.5 rounded-full bg-black w-8 ${
                    openMenu && "hidden"
                  }`}
                />
              </div>
              <div className="h-5 flex items-center overflow-hidden">
                <div
                  className={`transition-transform duration-500 ${
                    openMenu ? "-translate-y-3" : "translate-y-3"
                  }`}
                >
                  <h1>Menu</h1>
                  <h1>Close</h1>
                </div>
              </div>
            </div>
          </Sidebar>

          {/* Search button */}
          <Searchbar>
            <div className="cursor-pointer flex-item-center hidden lg:flex p-1">
              <Search />
              <div className="h-5 flex items-center overflow-hidden">
                <h1>Search</h1>
              </div>
            </div>
          </Searchbar>
        </div>

        {/* Menu bar and search button */}
        <Link href={"/home"}>
          <img
            src="/images/logo/logo.png"
            alt="laivaly-logo"
            className="w-10 2xl:w-14"
          />
        </Link>

        {/* Menu bar and search button */}
        <div className="flex-item-center gap-5 2xl:gap-8">
          <Link href={"/wishlist"} className="hidden md:block">
            <Heart />
          </Link>
          <Handbag />
          <UserRound />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
