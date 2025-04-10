import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import tShirt from "../../../assets/images/tShirt/shirt-mockup-concept-with-plain-clothing.jpg";
import SignInForm from "./SignInForm";
import { NavLink } from "react-router-dom";

const SignInModal = ({ child }: { child: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex">{child}</DialogTrigger>
      <DialogContent className="flex flex-col lg:flex-row items-center md:max-w-[80%] lg:max-w-[50%]">
        {/* SignIn form */}
        <div className="md:w-full lg:w-[50%] flex justify-center items-center">
          <div className="md:w-[70%] lg:w-[80%] mx-auto">
            <DialogHeader>
              <DialogTitle>
                <h1 className="text-3xl text-center">Sign In .</h1>
              </DialogTitle>

              <DialogDescription>
                <p className="text-lg text-gray-600 mb-8 text-center">
                  Sign in to your Laivaly account
                </p>
              </DialogDescription>
            </DialogHeader>

            {/* Login form */}
            <SignInForm />

            {/* Sign up link */}
            <div className="mt-8 text-center text-sm text-gray-600">
              <h1>
                Don't an account?{" "}
                <DialogClose asChild>
                  <NavLink to="/signUp">
                    <span className="font-semibold text-blue-700 cursor-pointer">
                      SignUp
                    </span>
                  </NavLink>
                </DialogClose>
              </h1>
            </div>
          </div>
        </div>

        {/* Image contetnt */}
        <div className="rounded-lg overflow-hidden lg:w-[50%] hidden lg:flex">
          <img src={tShirt} alt="tShirt" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
