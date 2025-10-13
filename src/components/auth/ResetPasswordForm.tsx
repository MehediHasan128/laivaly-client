"use client";

import { decodedUserToken } from "@/utils";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";
import { TError, TResponce } from "@/types/types";
import { CircleCheck, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import Spinner from "../reusable/Spinner";
import { toast } from "sonner";
import { resetUserPassword } from "@/lib/api/auth/auth";
import { useRouter } from "next/navigation";
import { TUser } from "@/types/user";

const ResetPasswordForm = ({ token }: { token: string }) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [givenPassword, setGivenPassword] = useState<string | null>(null);
  const router = useRouter();

  //   Check the password is 8 characters long
  const passLength = (givenPassword?.length ?? 0) >= 8;
  //   Check the password have at least on uppercase
  const passHaveCapitalLetter = /[A-Z]/.test(givenPassword as string);
  //   Check the password have at least on special characters
  const passHaveSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(
    givenPassword as string
  );
  //   Check the password have contain one number
  const passHaveNumber = /[0-9]/.test(givenPassword as string);

  const userInfo = decodedUserToken(token) as TUser;

  const handleResetUserPassword = async (data: FieldValues) => {
    const toastId = toast.loading("Loading");
    const resetPasswordData = {
      userEmail: userInfo?.userEmail,
      password: data?.password,
    };
    try {
      const res = (await resetUserPassword(resetPasswordData)) as TResponce;
      toast.success(res?.message, { id: toastId });
      router.push("/login");
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <LVForm onSubmit={handleResetUserPassword}>
      <div className="space-y-3">
        <div>
          <LVInput
            type="text"
            name="userEmail"
            defaultValue={userInfo?.userEmail}
            disabled
            label="Email"
          />
        </div>
        <div className="relative">
          <LVInput
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Enter new password"
            setInputValue={setGivenPassword}
            label="New Password"
            icon={showPass ? (
              <Eye
                onClick={() => setShowPass(!showPass)}
                className="size-5 cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={() => setShowPass(!showPass)}
                className="size-5 cursor-pointer"
              />
            )}
          />
        </div>
        {givenPassword && (
          <div>
            <span
              className={`font-semibold flex items-center gap-1 text-sm ${
                passLength && "text-green-600"
              }`}
            >
              <CircleCheck className="size-4" />
              Password must be at least 8 characters long
            </span>
            <span
              className={`font-semibold flex items-center gap-1 text-sm ${
                passHaveCapitalLetter && "text-green-600"
              }`}
            >
              <CircleCheck className="size-4" />
              Password must contain at least one uppercase letter
            </span>
            <span
              className={`font-semibold flex items-center gap-1 text-sm ${
                passHaveSpecialChar && "text-green-600"
              }`}
            >
              <CircleCheck className="size-4" />
              Password must contain at least one special character
            </span>
            <span
              className={`font-semibold flex items-center gap-1 text-sm ${
                passHaveNumber && "text-green-600"
              }`}
            >
              <CircleCheck className="size-4" />
              Password must contain at least one number
            </span>
          </div>
        )}
        <div>
          <LVInput
            type={showPass ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            label="Confirm Password"
          />
        </div>
        <div>
          <button className="btn mt-5 py-3 hover:underline">
            {false ? <Spinner /> : "Confirm"}
          </button>
        </div>
      </div>
    </LVForm>
  );
};

export default ResetPasswordForm;
