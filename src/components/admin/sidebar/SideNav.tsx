"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { LucideLayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const SideNav = ({
  items,
}: {
  items: {
    title: string;
    path: string;
    icon?: ReactNode;
  }[];
}) => {
  const currentPath = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="gap-0">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className={`px-5 py-3 rounded-md hover:scale-105 duration-300 ${item.path === currentPath && 'bg-black text-white'}`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <h1 className="text-lg font-medium">{item.title}</h1>
              </div>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SideNav;
