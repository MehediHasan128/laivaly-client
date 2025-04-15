import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import SignUpForm from "./SignUpForm";
import banner from "../../../assets/images/banner/signUpBanner2.jpg";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <div className="flex justify-between h-screen overflow-hidden">

      <div className="w-full xl:w-[50%] relative">
        <NavLink
          to="/"
          className="flex justify-center items-center gap-3 p-5 w-full lg:w-fit cursor-pointer relative z-20"
        >
          <img className="w-10" src={logo} alt="" />
          <h1 id="logo" className="text-3xl font-bold text-[#31473A]">
            Laivaly
          </h1>
        </NavLink>

        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <div className="2xl:w-[50%] p-8">
            <div className="text-center">
              <h1 className="text-2xl 2xl:text-3xl font-bold">Welcome to Laivaly</h1>
              <p className="text-sm 2xl:text-lg text-gray-600 mt-2">
                Create your first Laivaly accout
              </p>
            </div>

            <div className="mt-10">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex w-[50%] relative">
        <img
          className="w-full object-cover brightness-[50%]"
          src={banner}
          alt=""
        />
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="rounded-2xl p-6 md:p-10 text-white text-center max-w-2xl mx-auto mt-10"
          >
            <h2 className="text-5xl 2xl:text-6xl font-bold mb-4">Join Laivaly Today</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Discover your style, stay trendy, and enjoy exclusive member
              perks. Be part of a fashion-forward community built for you.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
