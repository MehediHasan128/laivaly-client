/* eslint-disable @next/next/no-img-element */
"use client";

import { Handbag, Heart, Search, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header>
      <div className="navbar">
        {/* Menu bar and search button */}
        <div className="flex-item-center">

          {/* Menubar */}
          <div
            className="cursor-pointer flex-item-center p-1"
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

          {/* Search button */}
          <div className="cursor-pointer flex-item-center p-1">
            <Search />
            <div className="h-5 flex items-center overflow-hidden">
              <h1>Search</h1>
            </div>
          </div>

        </div>

        {/* Menu bar and search button */}
        <Link href={"/home"}>
          <img
            src="/images/logo/logo.png"
            alt="laivaly-logo"
            className="w-14"
          />
        </Link>

        {/* Menu bar and search button */}
        <div className="flex-item-center gap-8">
          <Link href={"/wishlist"}>
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
