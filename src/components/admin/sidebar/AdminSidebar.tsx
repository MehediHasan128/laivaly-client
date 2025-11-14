import { BriefcaseBusiness, LucideLayoutDashboard, Package2, PackageOpen, Users } from "lucide-react";
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

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {path: ['/dashboard'], label: 'Dashboard', icon: <LucideLayoutDashboard />},
    {path: ['/customers'], label: 'Customers', icon: <Users />},
    {path: ['/staffs'], label: 'Staffs', icon: <BriefcaseBusiness />},
    {path: ['/products', '/add-product'], label: 'Products', icon: <PackageOpen />},
    {path: ['/orders'], label: 'Orders', icon: <Package2 />},
  ]
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
