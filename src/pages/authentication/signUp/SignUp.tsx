import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="w-[50%] relative">
        <NavLink
          to="/"
          className="flex items-center gap-3 p-5 w-fit cursor-pointer relative z-20"
        >
          <img className="w-10" src={logo} alt="" />
          <h1 id="logo" className="text-3xl font-bold text-[#31473A]">
            Laivaly
          </h1>
        </NavLink>

        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <div className="w-[50%] p-8">

            <div className="text-center">
              <h1 className="text-2xl font-bold">Welcome to Laivaly</h1>
              <p className="text-lg font-medium text-gray-600">
                Create your first Laivaly accout
              </p>
            </div>

            <div className="mt-10">
              <SignUpForm />
            </div>

          </div>
        </div>
      </div>
      <div className="w-[50%] bg-[#31473A]"></div>
    </div>
  );
};

export default SignUp;
