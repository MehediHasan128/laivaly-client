import { Outlet } from "react-router-dom";
import AppSidebar from "../reusable/AppSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <SidebarInset>
        <div>
            <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
