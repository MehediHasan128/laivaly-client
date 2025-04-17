import AdminDashboard from "@/admin/adminDashboard.tsx/AdminDashboard";
import Orders from "@/admin/orders/Orders";
import Products from "@/admin/products/Products";
import Users from "@/admin/users/Users";
import AdminLayout from "@/components/layout/AdminLayout";
import UserLayout from "@/components/layout/UserLayout";
import UserProfile from "@/components/layout/UserProfile";
import SignUp from "@/pages/authentication/signUp/SignUp";
import Cart from "@/pages/cart/Cart";
import Home from "@/pages/home/Home";
import NewCollection from "@/pages/newCollection/NewCollection";
import ProductDetails from "@/pages/productDetails/ProductDetails";
import { createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "./AdminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/newIn",
        element: <NewCollection />,
      },
      {
        path: "/productDetails/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: adminRoutes
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
]);
