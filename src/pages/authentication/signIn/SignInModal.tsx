import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import tShirt from "../../../assets/images/tShirt/shirt-mockup-concept-with-plain-clothing.jpg";
import SignInForm from "./SignInForm";

const SignInModal = ({ child }: { child: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex">{child}</DialogTrigger>
      <DialogContent className="flex items-center max-w-[800px] sm:max-w-[900px] lg:max-w-[50%]">
        {/* SignIn form */}
        <div className="w-[50%] flex justify-center items-center">
          <div className="w-[80%] mx-auto">
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
            
          </div>
        </div>

        {/* Image contetnt */}
        <div className="rounded-lg overflow-hidden w-[50%]">
          <img src={tShirt} alt="tShirt" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
