/* eslint-disable @typescript-eslint/no-explicit-any */
import LForm from "@/components/form/LForm";
import LInput from "@/components/form/LInput";
import { FieldValues } from "react-hook-form";
import { GoMail, GoLock } from "react-icons/go";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Spinner from "@/components/ui/spinner";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/redux/hook";
import { useSignInMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { decodedUserToken } from "@/utils/decodedUserToken";
import { setUser, Tuser } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { TError, TResponce } from "@/types";

// laivaly.bd@gmail.com
// Shaheen@123

const SignInForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPass, setShowPass] = useState(false);
  const [signIn, { isLoading }] = useSignInMutation();

  const userLogin = async (formData: FieldValues) => {
    const toastId = toast.loading(null);

    try {
      const res = await signIn(formData).unwrap() as TResponce;
      const userData = decodedUserToken(res?.data?.accessToken) as Tuser;

      dispatch(setUser({user: userData, token: res?.data?.sccessToken}))

      if(userData?.role === 'admin'){
        navigate(`/${userData?.role}`);
        onSuccess?.();
        toast.success(res?.message, { id: toastId, duration: 2000 });
      }else{
        navigate('/');
        onSuccess?.();
        toast.success(res?.message, { id: toastId, duration: 2000 });
      }

    } catch (err) {
      const error = err as TError
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <div>
      {/* Form */}
      <LForm onSubmit={userLogin}>
        <div>
          {/* Form input */}
          <div className="space-y-5">
            {/* User email input */}
            <div className="relative">
              <LInput
                type="email"
                name="userEmail"
                placeholder="Enter user email"
                icon={true}
              />
              <span className="absolute top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
                <GoMail />
              </span>
            </div>

            {/* User password input */}
            <div className="relative">
              <LInput
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="*****"
                icon={true}
              />

              <span className="absolute top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
                <GoLock />
              </span>

              {showPass ? (
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-0 top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-xl cursor-pointer"
                >
                  <AiOutlineEye />
                </span>
              ) : (
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-0 top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-xl cursor-pointer"
                >
                  <AiOutlineEyeInvisible />
                </span>
              )}
            </div>
          </div>

          {/* Remember or forgot password */}
          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm font-medium ">
              <Checkbox id="remember" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-800">
              <button>Forgot Password?</button>
            </div>
          </div>
        </div>

        {/* Sign in button */}
        <button className="bg-[#31473A] hover:bg-[#203026] duration-500 w-full mt-8 py-3 rounded-lg text-md text-white cursor-pointer">
          {isLoading ? <Spinner /> : "Sign In"}
        </button>
      </LForm>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">Sign In with</span>
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

export default SignInForm;