import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "../ui/sidebar";
import NavMain from "./NavMain";
import NavUser from "./NavUser";
import logo from "../../assets/images/logo/logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineProduct } from "react-icons/ai";
import { LiaClipboardListSolid } from "react-icons/lia";
import { HiOutlineShoppingBag } from "react-icons/hi";

const data = {
  navMain: [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: <MdOutlineSpaceDashboard />,
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: <HiOutlineUsers />,
    },
    {
      title: "Products",
      path: "/admin/products",
      icon: <AiOutlineProduct />,
    },
    {
      title: "Oders",
      path: "/admin/orders",
      icon: <LiaClipboardListSolid />,
    },
    {
      title: "Shop",
      path: "/",
      icon: <HiOutlineShoppingBag />,
    },
  ],
};

interface TAppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  buttonClicked: boolean;
  setButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppSidebar = ({
  buttonClicked,
  setButtonClicked,
  ...props
}: TAppSidebarProps) => {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenuItem className="flex justify-between">
          <div className="flex items-center gap-2 py-2">
            <div className="flex size-8 md:size-10 items-center justify-center rounded-lg">
              <img src={logo} alt="" />
            </div>
            <div className="grid flex-1 text-left">
              <span
                id="logo"
                className="truncate font-semibold text-2xl md:text-3xl"
              >
                Laivaly
              </span>
            </div>
          </div>

          <div className="block md:hidden">
            <SidebarTrigger
              onClick={() => setButtonClicked(!buttonClicked)}
              clicked={buttonClicked}
            />
          </div>
        </SidebarMenuItem>
      </SidebarHeader>

      <SidebarContent className="my-3">
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <div className="bg-gray-100 rounded-lg py-0.5">
          <NavUser />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
