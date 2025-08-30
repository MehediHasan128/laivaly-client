"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

const SidebarButton = () => {
  const [sideBarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <Sidebar openMenu={sideBarOpen} setOpenMenu={setSidebarOpen}>
      <div
        onClick={() => setSidebarOpen(!sideBarOpen)}
        className={`flex items-center gap-2.5 cursor-pointer ${sideBarOpen && "z-100"}`}
      >
        <div className="flex flex-col gap-1">
          <div
            className={`bg-black rounded-full h-0.5 w-6 md:w-8 transition-transform duration-500 ${
              sideBarOpen && "origin-center rotate-45 translate-y-[3px]"
            }`}
          />
          <div
            className={`bg-black rounded-full h-0.5 w-6 md:w-8 transition-transform duration-500 ${
              sideBarOpen && "origin-center -rotate-45 -translate-y-[3px]"
            }`}
          />
          <div
            className={`${
              sideBarOpen && "hidden"
            } bg-black rounded-full h-0.5 w-6 md:w-8`}
          />
        </div>
        <div className="h-5 flex items-center overflow-hidden text-sm md:text-base">
          <div
            className={`transition-transform duration-500 ${
              sideBarOpen ? "-translate-y-2.5 md:translate-y-3" : "translate-y-2.5 md:translate-y-3"
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
