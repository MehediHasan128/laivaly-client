"use client";

import { FieldValues } from "react-hook-form";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";
import { CircleCheck, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Spinner from "../reusable/Spinner";

const SignupForm = () => {
  const [givenPassword, setGivenPassword] = useState<string | null>(null);
  const [showPass, setShowPass] = useState<boolean>(false);

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

  const handleCreateCustomerAccount = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <LVForm onSubmit={handleCreateCustomerAccount}>
      <div className="space-y-3">
        {/* Name input */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="w-full">
            <LVInput
              type="text"
              name="userName.firstName"
              placeholder="First Name"
            />
          </div>
          <div className="w-full">
            <LVInput
              type="text"
              name="userName.lastName"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <LVInput
            type="email"
            name="userEmail"
            placeholder="Enter your email *"
          />
        </div>

        {/* Password input */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="w-full relative">
            <LVInput
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
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
          <div className="w-full">
            <LVInput
              type={showPass ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
            />
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

        <div>
          <button className="btn flex justify-center py-3 mt-5 uppercase">
            {false ? <Spinner /> : "continue"}
          </button>
        </div>
      </div>
    </LVForm>
  );
};

export default SignupForm;
