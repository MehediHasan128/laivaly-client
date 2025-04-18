import AdminDashboard from "@/admin/adminDashboard.tsx/AdminDashboard";
import Orders from "@/admin/orders/Orders";
import Products from "@/admin/products/Products";
import Users from "@/admin/users/Users";
import { generateUserRoutes } from "@/utils/generateUserRoutes";
import { AiOutlineProduct } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { LuLayoutDashboard } from "react-icons/lu";

export const adminRoutesAndPaths = [
  {
    index: true,
    title: "Dashboard",
    element: <AdminDashboard />,
    icon: <LuLayoutDashboard />,
  },
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    icon: <LuLayoutDashboard />,
  },
  {
    title: "Users",
    path: "/admin/users",
    element: <Users />,
    icon: <HiOutlineUsers />,
  },
  {
    title: "Products",
    path: "/admin/products",
    element: <Products />,
    icon: <AiOutlineProduct />,
  },
  {
    title: "Oders",
    path: "/admin/orders",
    element: <Orders />,
    icon: <LiaClipboardListSolid />,
  }
];

export const adminRoutes = generateUserRoutes(adminRoutesAndPaths);
