"use client";

import { decodedUserToken } from "@/utils";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";
import { Label } from "../ui/label";
import { TUser } from "@/types/types";
import { CircleCheck, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const ResetPasswordForm = ({ token }: { token: string }) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [givenPassword, setGivenPassword] = useState<string | null>(null);

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

  const handleResetUserPassword = async () => {};

  return (
    <LVForm onSubmit={handleResetUserPassword}>
      <div className="space-y-3">
        <div className="space-y-1.5">
          <Label>Email</Label>
          <LVInput
            type="text"
            name="userEmail"
            defaultValue={userInfo?.userEmail}
            disabled
          />
        </div>
        <div className="space-y-1.5">
          <Label>New Password</Label>
          <div className="relative">
            <LVInput
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Enter new password"
              setInputValue={setGivenPassword}
            />
            <div className="absolute top-0 right-0 flex justify-center items-center h-full px-5">
              {showPass ? (
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
            </div>
          </div>
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
        <div className="space-y-1.5">
          <Label>Confirm Password</Label>
          <LVInput
            type={showPass ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>
        <div>
          <button className="btn mt-5 py-3 hover:underline">Confirm</button>
        </div>
      </div>
    </LVForm>
  );
};

export default ResetPasswordForm;
