import React, { Dispatch, SetStateAction, useState } from "react";
import { FieldValues } from "react-hook-form";
import LVForm from "../LVForm/LVForm";
import { Label } from "../ui/label";
import LVInput from "../LVForm/LVInput";
import { CircleCheck, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { TError, TResponce } from "@/types/types";

const EditPasswordForm = ({drawerOpen}: {drawerOpen: Dispatch<SetStateAction<boolean>>}) => {
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
    
  };

  return (
    <LVForm onSubmit={handleUpdateUserPassword}>
      <div className="space-y-3">
        <div className="space-y-2">
          <Label>New Password</Label>
          <div className="relative">
            <LVInput
              type={showOldPass ? "text" : "password"}
              name="oldPassword"
              placeholder="Enter a new password"
            />
            <div className="absolute top-0 right-0 flex justify-center items-center h-full px-5">
              {showOldPass ? (
                <Eye
                  onClick={() => setShowOldPass(!showOldPass)}
                  className="size-5 cursor-pointer"
                />
              ) : (
                <EyeOff
                  onClick={() => setShowOldPass(!showOldPass)}
                  className="size-5 cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label>New Password</Label>
          <div className="relative">
            <LVInput
              type={showNewPass ? "text" : "password"}
              name="newPassword"
              placeholder="Enter a new password"
              setInputValue={setGivenPassword}
            />
            <div className="absolute top-0 right-0 flex justify-center items-center h-full px-5">
              {showNewPass ? (
                <Eye
                  onClick={() => setShowNewPass(!showNewPass)}
                  className="size-5 cursor-pointer"
                />
              ) : (
                <EyeOff
                  onClick={() => setShowNewPass(!showNewPass)}
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
        <div className="space-y-2">
          <Label>Confirm new Password</Label>
          <LVInput
            type={showNewPass ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your new password"
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
