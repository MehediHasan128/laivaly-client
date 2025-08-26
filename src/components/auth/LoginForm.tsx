"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";
import { FieldValues } from "react-hook-form";
import { Label } from "../ui/label";
import { generateDateAndYearOptions } from "@/utils";
import LVSelect from "../LVForm/LVSelect";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);

  const handleCustomerLogin = async (data: FieldValues) => {
    console.log(data);
  };

  const dateOptions = generateDateAndYearOptions(1, 30)

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

            <Label className="absolute right-0 mt-1.5 font-medium p-0.5 hover:underline cursor-pointer">
              Forget Password
            </Label>
          </div>
          <div>
            <LVSelect name="date" options={dateOptions} placeholder="Select Date" />
          </div>
          {/* Submit button */}
          <div>
            <button type="submit" className="btn mt-10 uppercase">
              login
            </button>
          </div>
        </div>
      </LVForm>
    </>
  );
};

export default LoginForm;
