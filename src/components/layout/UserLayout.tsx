import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

const UserLayout = () => {

  const {pathname} = useLocation();
  console.log(pathname);

  return (
    <>
      {(pathname !== '/signUp') && <Navbar />}
      <Outlet />
      {(pathname !== '/signUp') && <Footer />}
    </>
  );
};

export default UserLayout;
