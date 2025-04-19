import { Outlet } from "react-router-dom";
import AppSidebar from "../reusable/AppSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { useState } from "react";

const UserProfile = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <SidebarProvider>
      <AppSidebar
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />

      <div
        className={`h-fit fixed z-20 duration-300 top-2 p-2 ${
          buttonClicked ? "md:left-20" : "md:left-52"
        }`}
      >
        <SidebarTrigger
          className=""
          onClick={() => setButtonClicked(!buttonClicked)}
          clicked={buttonClicked}
        />
      </div>

      <SidebarInset className="md:bg-gray-50 overflow-hidden p-10">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default UserProfile;
