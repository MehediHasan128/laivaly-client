import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

const UserLayout = () => {

  const {pathname} = useLocation();

  return (
    <>
      {!['/signUp', '/signUp/user/information'].includes(pathname) && <Navbar />}
      <Outlet />
      {!['/signUp', '/signUp/user/information'].includes(pathname) && <Footer />}
    </>
  );
};

export default UserLayout;
