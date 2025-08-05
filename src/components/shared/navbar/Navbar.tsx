"use client"

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);

  return (
    <div className="navbar">
      {/* Sidebar */}
      <div
        className="flex flex-col gap-2 cursor-pointer p-2"
        onClick={() => setOpenSidebarMenu(!openSidebarMenu)}
      >
        <div className={`w-10 bg-black h-0.5 rounded-full duration-300 ${openSidebarMenu && "transition-transform duration-300 origin-center rotate-45 translate-y-1.5"}`} />
        <div className={`w-10 bg-black h-0.5 rounded-full duration-300 ${openSidebarMenu && "transition-transform duration-300 origin-center -rotate-45 -translate-y-1.5"}`} />
      </div>

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
      <div></div>
    </div>
  );
};

export default Navbar;
