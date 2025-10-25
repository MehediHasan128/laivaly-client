"use client";

import { smoochsans } from "@/styles/font";
import { LayoutDashboard, Package2, PackageOpen, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
    {
        icon: <LayoutDashboard />,
        label: 'Dashboard',
        path: '/admin/dashboard'
    },
    {
        icon: <Users />,
        label: 'User',
        path: '/admin/user'
    },
    {
        icon: <PackageOpen />,
        label: 'Products',
        path: '/admin/product'
    },
    {
        icon: <Package2 />,
        label: 'Orders',
        path: '/admin/product'
    },
]

const AdminSidebar = () => {

  const pathName = usePathname();

  return (
    <div className="border h-full">
      <div className="flex justify-center gap-2 py-5">
        <div className="relative size-10">
          <Image src="/images/logo/logo.png" alt="" quality={100} fill />
        </div>
        <h1 className={`${smoochsans.className} text-4xl font-bold`}>Laivaly</h1>
      </div>

      <div className="mt-5">
        {
            sidebarItems.map((item) => (
                <Link key={item.label} href={item.path}>
                  <div className={`py-3 px-4 mx-2 cursor-pointer hover:scale-105 duration-500 rounded-lg ${item.path === pathName && 'bg-black text-white'}`}>
                    <span className="flex gap-2 font-semibold">
                        {item.icon}
                        <h1>{item.label}</h1>
                    </span>
                </div>
                </Link>
            ))
        }
      </div>
    </div>
  );
};

export default AdminSidebar;
