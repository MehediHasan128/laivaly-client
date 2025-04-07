import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

const UserLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default UserLayout;