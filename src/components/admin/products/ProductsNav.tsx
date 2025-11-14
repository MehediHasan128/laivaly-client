"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { path: "/admin/products", label: "All Products" },
  { path: "/admin/add-product", label: "Add Product" },
];

const ProductsNav = () => {
  const path = usePathname();

  return (
    <div className="mb-5">
      <div className="flex font-semibold">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`p-3 ${path === item.path && "border-b-4 border-black"}`}
          >
            <Link href={item.path}>{item.label}</Link>
          </div>
        ))}
      </div>
      <div className="border-t" />
    </div>
  );
};

export default ProductsNav;
