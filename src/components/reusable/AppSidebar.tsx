import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
  SidebarRail,
} from "../ui/sidebar";
import NavMain from "./NavMain";
import NavUser from "./NavUser";
import logo from "../../assets/images/logo/logo.png";
import { MdOutlineDashboard } from "react-icons/md";

const data = {
  navMain: [
    {
      title: "Dashboard",
      path: "#",
      icon: <MdOutlineDashboard />,
    },
  ],
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenuItem className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-lg">
            <img src={logo} alt="" />
          </div>
          <div className="grid flex-1 text-left">
            <span id="logo" className="truncate font-semibold text-3xl">
              Laivaly
            </span>
          </div>
        </SidebarMenuItem>
      </SidebarHeader>

      <SidebarContent className="my-3">
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
