import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const navItems = [
  { label: "New Arrival", path: "/" },
  { label: "Men's", path: "/" },
  { label: "Women's", path: "/" },
  { label: "Children", path: "/" },
];

const NavItems = () => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {navItems.map((item, index) => (
        <div
          key={item.label}
          className={`flex justify-between items-center text-xl font-medium cursor-pointer group transition-colors duration-300 py-3 ${hoveredIndex === null || hoveredIndex === index ? "text-black" : "text-gray-500"}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span className="overflow-hidden">
            <p>{item.label}</p>
            <div className="h-[1px] bg-black w-full transition-transform duration-700 -translate-x-64 group-hover:translate-x-0" />
          </span>
          <ChevronRight className="opacity-0 group-hover:opacity-100 duration-500" />
        </div>
      ))}
    </>
  );
};

export default NavItems;
