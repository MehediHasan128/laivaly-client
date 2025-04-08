import UserLayout from "@/components/layout/UserLayout";
import Home from "@/pages/home/Home";
import NewCollection from "@/pages/newCollection/NewCollection";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/newIn',
                element: <NewCollection />
            }
        ]
    }
])