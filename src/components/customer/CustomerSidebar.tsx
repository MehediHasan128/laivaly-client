"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sideBar = [
  { path: "/account", label: "Overview" },
  { path: "/orders", label: "Orders" },
  { path: "/profile", label: "Personal Information" },
  { path: "/address", label: "Address" },
  { path: "/wishlist", label: "Wishlist" },
];

const CustomerSidebar = () => {
  const pathName = usePathname();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Hi, Mehedi Hasan</h1>

      <div className="mt-5 space-y-1">
        {sideBar.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`block py-2 px-1 rounded ${
              pathName === item.path && "bg-accent px-5 py-2.5 text-lg"
            } hover:bg-accent hover:px-5 duration-500 cursor-pointer font-semibold`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomerSidebar;
