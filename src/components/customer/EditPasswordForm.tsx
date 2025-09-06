import React, { Dispatch, SetStateAction, useState } from "react";
import { FieldValues } from "react-hook-form";
import LVForm from "../LVForm/LVForm";
import { Label } from "../ui/label";
import LVInput from "../LVForm/LVInput";
import { CircleCheck, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { TError, TResponce } from "@/types/types";
import { changeUserPassword } from "@/lib/api/auth/auth";

const EditPasswordForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [showOldPass, setShowOldPass] = useState<boolean>(false);
  const [showNewPass, setShowNewPass] = useState<boolean>(false);
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

  const handleUpdateUserPassword = async (data: FieldValues) => {
    const toastId = toast.loading("Loading...");
    const { oldPassword, newPassword, confirmPassword } = data;

    if (
      newPassword === confirmPassword &&
      passLength &&
      passHaveCapitalLetter &&
      passHaveSpecialChar &&
      passHaveNumber
    ) {
      const upadtedPasswordData = {
        oldPassword,
        newPassword,
      };

      try {
        const res = (await changeUserPassword(
          upadtedPasswordData
        )) as TResponce;
        toast.success(res.message, { id: toastId });
        onSuccess?.();
      } catch (err) {
        const error = err as TError;
        toast.error(error?.data?.message, { id: toastId });
      }
    } else {
      if (!passLength) {
        toast.error("Password must be at least 8 characters long", {
          id: toastId,
        });
      } else if (!passHaveCapitalLetter) {
        toast.error("Password must contain at least one uppercase letter", {
          id: toastId,
        });
      } else if (!passHaveSpecialChar) {
        toast.error("Password must contain at least one special character", {
          id: toastId,
        });
      } else if (!passHaveNumber) {
        toast.error("Password must contain at least one number", {
          id: toastId,
        });
      } else {
        toast.error("Confirm password must be matched with new password", {
          id: toastId,
        });
      }
    }
  };

  return (
    <LVForm onSubmit={handleUpdateUserPassword}>
      <div className="space-y-3">
        <div className="relative">
          <LVInput
            type={showOldPass ? "text" : "password"}
            name="oldPassword"
            placeholder="Enter a new password"
            label="Current Password"
            icon={
              showOldPass ? (
                <Eye
                  onClick={() => setShowOldPass(!showOldPass)}
                  className="size-5 cursor-pointer"
                />
              ) : (
                <EyeOff
                  onClick={() => setShowOldPass(!showOldPass)}
                  className="size-5 cursor-pointer"
                />
              )
            }
          />
        </div>
        <div>
          <LVInput
            type={showNewPass ? "text" : "password"}
            name="newPassword"
            placeholder="Enter a new password"
            setInputValue={setGivenPassword}
            label="New Password"
            icon={
              showNewPass ? (
                <Eye
                  onClick={() => setShowNewPass(!showNewPass)}
                  className="size-5 cursor-pointer"
                />
              ) : (
                <EyeOff
                  onClick={() => setShowNewPass(!showNewPass)}
                  className="size-5 cursor-pointer"
                />
              )
            }
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
            type={showNewPass ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your new password"
            label="Confirm new Password"
          />
        </div>
        <div>
          <button className="btn py-3 hover:underline mt-5 uppercase">
            confirm
          </button>
        </div>
      </div>
    </LVForm>
  );
};

export default EditPasswordForm;
