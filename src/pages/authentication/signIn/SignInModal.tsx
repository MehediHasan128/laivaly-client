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
      {/* Sign in button */}
      <DialogTrigger className="flex">{child}</DialogTrigger>
      {/* Main Sign in content */}
      <DialogContent className="flex justify-center items-center xl:max-w-[70%] 2xl:max-w-[50%]">

        {/* SignIn form */}
        <div className="flex justify-center items-center md:w-[80%] xl:w-[50%]">
          <div className="mx-auto w-full xl:w-[90%]">
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
        <div className="rounded-lg overflow-hidden hidden xl:block xl:w-[50%]">
          <img src={tShirt} alt="tShirt" />
        </div>

      </DialogContent>

    </Dialog>
  );
};

export default SignInModal;
