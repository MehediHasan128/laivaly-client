"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { path: "/my-account/orders", label: "Orders" },
  { path: "/my-account/orders/history", label: "History" },
];

const OrderNavbar = () => {
  const path = usePathname();

  return (
    <div>
      <div className="flex text-xl md:text-2xl font-semibold">
        {navItems.map((item) => (
          <div key={item.label} className={`p-3 ${path === item.path && "border-b-4 border-black"}`}>
            <Link href={item.path}>{item.label}</Link>
          </div>
        ))}
      </div>
      <div className="border-t" />
    </div>
  );
};

export default OrderNavbar;
