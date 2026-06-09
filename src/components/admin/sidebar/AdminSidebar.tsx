import {
  BriefcaseBusiness,
  LucideLayoutDashboard,
  Package2,
  PackageOpen,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../../ui/sidebar";
import SideNav from "./SideNav";
import NavUser from "./NavUser";
import Image from "next/image";
import { smoochsans } from "@/styles/font";
import { AiOutlineHome } from "react-icons/ai";
import { PiPackageThin } from "react-icons/pi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { LiaUsersCogSolid } from "react-icons/lia";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { path: ["/dashboard"], label: "Dashboard", icon: <AiOutlineHome /> },
    { path: ["/customers"], label: "Customers", icon: <LuUsers /> },
    { path: ["/staffs"], label: "Staffs", icon: <LiaUsersCogSolid /> },
    {
      path: ["/products", "/add-product"],
      label: "Products",
      icon: <PiPackageThin />,
    },
    { path: ["/orders"], label: "Orders", icon: <LiaClipboardListSolid /> },
  ],
};

const AdminSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center gap-3">
          <div className="relative size-10">
            <Image src="/images/logo/logo.png" alt="logo" quality={100} fill />
          </div>
          <h1 className={`${smoochsans.className} text-4xl font-bold`}>
            Laivaly
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="py-5">
        <SideNav items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
