import AdminSidebar from "@/components/admin/sidebar/AdminSidebar";
import NavUser from "@/components/admin/sidebar/NavUser";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React, { CSSProperties } from "react";
import { FaRegBell } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

const data = {
  user: {
    name: "Mehedi Hasan",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider
      defaultOpen={true}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
        } as CSSProperties
      }
    >
      <AdminSidebar variant="inset" />
      <SidebarInset className="bg-gray-50">
        <div className="p-5 space-y-2">
          <div className="flex justify-between">
            <SidebarTrigger />
            <div className="w-fit flex items-center gap-8">
              <div className="relative w-full">
                <div className="absolute top-0 h-full px-3 text-2xl flex items-center text-gray-600">
                  <LuSearch />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search anything..."
                  className="pl-10 pr-3 py-2 border rounded-md text-sm font-medium focus:outline focus:outline-blue-400"
                />
              </div>
              <div>
                <FaRegBell className="text-2xl" />
              </div>
              <NavUser user={data.user} />
            </div>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
