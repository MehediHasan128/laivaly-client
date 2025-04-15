import LForm from "@/components/form/LForm";
import LInput from "@/components/form/LInput";
import { Checkbox } from "@/components/ui/checkbox";
import Spinner from "@/components/ui/spinner";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { GoLock, GoMail } from "react-icons/go";
import { IoLogoApple } from "react-icons/io5";

const SignUpForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUpUser = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <LForm onSubmit={handleSignUpUser}>
        <div className="space-y-4">
          <div className="flex gap-5">
            <LInput
              type="text"
              name="userName.firstName"
              placeholder="First name"
              icon={false}
            />
            <LInput
              type="text"
              name="userName.lastName"
              placeholder="Last name"
              icon={false}
            />
          </div>

          <div className="relative">
            <LInput
              type="email"
              name="userEmail"
              placeholder="Emaill Address"
              icon
            />
            <span className="absolute top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
              <GoMail />
            </span>
          </div>

          <div className="relative">
            <LInput
              type={showPass ? "text" : "password"}
              name="userPassword"
              placeholder="Enter password"
              icon
            />

            <span className="absolute top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
              <GoLock />
            </span>

            <div className="absolute top-0 right-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
              {showPass ? (
                <AiOutlineEye
                  onClick={() => setShowPass(!showPass)}
                  className="cursor-pointer"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPass(!showPass)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>

          <div className="relative">
            <LInput
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              icon
            />
            <span className="absolute top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
              <GoLock />
            </span>

            <div className="absolute top-0 right-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
              {showConfirmPass ? (
                <AiOutlineEye
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="cursor-pointer"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium ">
            <Checkbox id="remember" />
            <label
              htmlFor="terms"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to all the{" "}
              <span className="underline text-[#31473A] cursor-pointer">
                Terms & Condition
              </span>
            </label>
          </div>

          <button
            onClick={() => setLoading(!loading)}
            type="submit"
            className="py-2.5 border border-[#31473A] rounded-lg w-full font-semibold bg-[#31473A] text-white cursor-pointer"
          >
            {loading ? <Spinner /> : "Sign Up"}
          </button>
        </div>
      </LForm>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">Sign Up with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Login with google or apple */}
      <div className="flex justify-between gap-5">
        <button className="w-[50%] flex justify-center items-center gap-2 font-medium border border-gray-300 py-3 rounded-lg cursor-pointer">
          <FcGoogle className="text-2xl" /> Google
        </button>
        <button className="w-[50%] flex justify-center items-center gap-2 font-medium border border-gray-300 py-3 rounded-lg cursor-pointer">
          <IoLogoApple className="text-3xl" /> Apple
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
