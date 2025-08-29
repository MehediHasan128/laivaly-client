"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";
import { FieldValues } from "react-hook-form";
import { Label } from "../ui/label";
import {
  useForgetUserPasswordMutation,
  useUserLoginMutation,
} from "@/redux/features/auth/authApi";
import { TError, TResponce, TUser } from "@/types/types";
import { toast } from "sonner";
import Spinner from "../reusable/Spinner";
import { decodedUserToken } from "@/utils";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);

  // User login function
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleCustomerLogin = async (userCredential: FieldValues) => {
    const toastId = toast.loading(null);
    try {
      const res = (await userLogin(userCredential).unwrap()) as TResponce;
      const token = res.data.accessToken;
      const userInfo = decodedUserToken(token) as TUser;
      dispatch(setUser({ user: userInfo }));
      toast.success(res?.message, { id: toastId });
      router.push("/home");
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  // Forget User password
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [forgetUserPassword] = useForgetUserPasswordMutation();
  const handleForgetUserPassword = async () => {
    const toastId = toast.loading(null);
    try {
      const res = (await forgetUserPassword({
        userEmail,
      }).unwrap()) as TResponce;
      if (res.success) {
        toast.success(res?.message, { id: toastId });
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <>
      <LVForm onSubmit={handleCustomerLogin}>
        <div className="space-y-3">
          {/* Email Input */}
          <div>
            <LVInput
              type="email"
              name="userEmail"
              placeholder="Enter your Laivaly email"
              setInputValue={setUserEmail}
              className="py-4"
            />
          </div>
          {/* Password Input */}
          <div className="relative">
            <LVInput
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="py-4"
            />
            {showPass ? (
              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute top-0 right-0 h-full rounded-r flex items-center cursor-pointer px-5"
              >
                <Eye className="size-5 md:size-6" />
              </div>
            ) : (
              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute top-0 right-0 h-full rounded-r flex items-center cursor-pointer px-5"
              >
                <EyeClosed className="size-5 md:size-6" />
              </div>
            )}

            <Label
              onClick={handleForgetUserPassword}
              className="absolute right-0 mt-1.5 font-medium p-0.5 hover:underline cursor-pointer"
            >
              Forget Password
            </Label>
          </div>
          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="btn mt-10 uppercase flex justify-center"
            >
              {isLoading ? (
                <>
                  <Spinner />
                </>
              ) : (
                "login"
              )}
            </button>
          </div>
        </div>
      </LVForm>
    </>
  );
};

export default LoginForm;
