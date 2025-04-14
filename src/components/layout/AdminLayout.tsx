import { Outlet } from "react-router-dom";
import AppSidebar from "../reusable/AppSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { useState } from "react";

const AdminLayout = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <SidebarProvider>
      <AppSidebar
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />

      <div className="h-fit">
        <SidebarTrigger
          onClick={() => setButtonClicked(!buttonClicked)}
          clicked={buttonClicked}
        />
      </div>

      <SidebarInset className="md:bg-gray-50 overflow-hidden p-5">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
