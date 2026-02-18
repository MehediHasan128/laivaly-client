"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

const SidebarButton = ({ className }: { className?: string }) => {
  const [sideBarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <Sidebar openMenu={sideBarOpen} setOpenMenu={setSidebarOpen}>
      <div
        onClick={() => setSidebarOpen(!sideBarOpen)}
        className={`flex items-center gap-2.5 cursor-pointer`}
      >
        <div className="flex flex-col gap-1">
          <div
            className={`${className} rounded-full h-0.5 w-6 md:w-8 transition-transform duration-500 ${
              sideBarOpen && "origin-center rotate-45 translate-y-[3px]"
            }`}
          />
          <div
            className={`${className} rounded-full h-0.5 w-6 md:w-8 transition-transform duration-500 ${
              sideBarOpen && "origin-center -rotate-45 -translate-y-[3px]"
            }`}
          />
          <div
            className={`${
              sideBarOpen && "hidden"
            } ${className} rounded-full h-0.5 w-6 md:w-8`}
          />
        </div>
        <div className="h-5 hidden md:flex items-center overflow-hidden text-sm xl:text-base">
          <div
            className={`transition-transform duration-500 ${
              sideBarOpen
                ? "-translate-y-2.5 xl:-translate-y-3"
                : "translate-y-2.5 xl:translate-y-3"
            }`}
          >
            <h1>Menu</h1>
            <h1>Close</h1>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarButton;
