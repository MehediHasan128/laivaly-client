import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const UserLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default UserLayout;