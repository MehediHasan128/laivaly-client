"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";
import { FieldValues } from "react-hook-form";
import { Label } from "../ui/label";
import Spinner from "../reusable/Spinner";
import { resetPasswordLink, userLogin } from "@/lib/api/auth/auth";
import { toast } from "sonner";
import { TError, TResponce } from "@/types/types";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // User login function
  const handleCustomerLogin = async (userCredential: FieldValues) => {
    setLoading(true);
    const toastId = toast.loading("Loading");
    try {
      const res = (await userLogin(userCredential)) as TResponce;
      toast.success(res?.message, { id: toastId });
      router.push("/home");
      setLoading(false);
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
      setLoading(false);
    }
  };

  // Forget User password
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const handleForgetUserPassword = async () => {
    const toastId = toast.loading("Loading");
    try {
      const res = (await resetPasswordLink(userEmail as string)) as TResponce;
      console.log(res);
      toast.success(res?.message, { id: toastId });
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
              defaultValue="bayzidahmed467@gmail.com"
            />
          </div>
          {/* Password Input */}
          <div className="relative">
            <LVInput
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="py-4"
              defaultValue="Bayzid@13"
              icon={
                showPass ? (
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-0 right-0 h-full rounded-r flex items-center cursor-pointer px-5"
                  >
                    <Eye className="size-5" />
                  </div>
                ) : (
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-0 right-0 h-full rounded-r flex items-center cursor-pointer px-5"
                  >
                    <EyeOff className="size-5" />
                  </div>
                )
              }
            />

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
              {loading ? (
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
