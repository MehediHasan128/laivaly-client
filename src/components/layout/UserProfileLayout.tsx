import UserSidebar from "@/pages/userProfile/UserSidebar";
import { Sidebar, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { Outlet } from "react-router-dom";

const UserProfileLayout = () => {
  return (
    <SidebarProvider>

      <Sidebar>
        <UserSidebar />
      </Sidebar>

      <main className="w-full">

        <div className="">
          <SidebarTrigger />
        </div>

        <div className="px-10">
          <Outlet />
        </div>
        
      </main>

    </SidebarProvider>
  );
};

export default UserProfileLayout;
