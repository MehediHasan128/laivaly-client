import UserLayout from "@/components/layout/UserLayout";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])