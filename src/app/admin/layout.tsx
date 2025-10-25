import AdminSidebar from "@/components/admin/sidebar/AdminSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React, { CSSProperties } from "react";

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
      <SidebarInset>
        <div className="p-5 space-y-2">
          <SidebarTrigger className="cursor-pointer" />
          <div className="w-full">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
