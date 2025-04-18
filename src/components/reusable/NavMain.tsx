import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { NavLink } from "react-router-dom";
import { generateUserPaths } from "@/utils/generateUserPaths";
import { adminRoutesAndPaths } from "@/routes/AdminRoutes";
import { userRoutesAndPaths } from "@/routes/UserRoutes";

const UserRole = {
  ADMIN: "admin",
  BUYER: "buyer",
};

const NavMain = () => {
  const role = "buyer";
  let navItems;

  switch (role) {
    case UserRole.ADMIN:
      navItems = generateUserPaths(adminRoutesAndPaths);
      break;

    case UserRole.BUYER:
      navItems = generateUserPaths(userRoutesAndPaths);
      break;

    default:
      break;
  }

  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-2">
        {navItems!.map((item) => (
          <NavLink
            key={item.title}
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
                <span className="text-2xl text-gray-600">{item.icon}</span>
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
