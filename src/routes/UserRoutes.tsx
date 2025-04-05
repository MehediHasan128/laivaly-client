import UserLayout from "@/components/layout/UserLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />
    }
])