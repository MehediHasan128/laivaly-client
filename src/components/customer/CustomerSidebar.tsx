"use client"

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
          <div
            key={index}
            className={`py-2 px-1 rounded ${pathName === item.path && "bg-accent px-5 py-2.5 text-lg"} hover:bg-accent hover:px-5 duration-500 cursor-pointer font-semibold`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSidebar;
