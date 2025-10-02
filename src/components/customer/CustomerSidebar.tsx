"use client";

import { TCustomerProfile } from "@/types/customer.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideBar = [
  { path: "/overview", label: "Overview" },
  { path: "/orders", label: "Orders" },
  { path: "/profile", label: "Personal Information" },
  { path: "/address", label: "Address Book" },
  { path: "/wishlist", label: "Wishlist" },
];

const CustomerSidebar = ({customerData}: {customerData: TCustomerProfile}) => {
  const pathName = usePathname();

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold">Hi, {customerData?.userName.firstName} {customerData?.userName.lastName}</h1>

      <div className="mt-5 space-y-1">
        {sideBar.map((item, index) => (
          <Link
            key={index}
            href={`/my-account/${item.path}`}
            className={`block py-2 px-1 rounded ${
              pathName === `/my-account${item.path}` && "bg-accent px-5 py-2.5 text-lg"
            } hover:bg-accent hover:px-5 duration-500 cursor-pointer font-semibold text-sm md:text-base`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomerSidebar;
