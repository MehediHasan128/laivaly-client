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
import { useAppSelector } from "@/redux/hook";
import { currentUser } from "@/redux/features/auth/authSlice";

const UserRole = {
  ADMIN: "admin",
  BUYER: "buyer",
};

const NavMain = () => {
  const user = useAppSelector(currentUser);
  const role = user?.role;
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
                ? "text-[#077c38] font-medium"
                : "font-medium text-gray-700"
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
