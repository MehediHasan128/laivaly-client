import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

const NavMain = ({
  items,
}: {
  items: {
    title: string;
    path: string;
    icon?: ReactNode;
  }[];
}) => {
  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-1">
        {items.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#337a51] font-medium"
                : "font-medium"
            }
          >
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={item.title}
                className="cursor-pointer"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </NavLink>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
