"use client";

import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";
import { FieldValues } from "react-hook-form";
import { Label } from "../ui/label";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);

  const handleCustomerLogin = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <LVForm onSubmit={handleCustomerLogin}>
        <div className="space-y-3">
          {/* Email Input */}
          <div>
            <LVInput
              type="email"
              name="email"
              placeholder="Enter your Laivaly email"
            />
          </div>
          {/* Password Input */}
          <div className="relative">
            <LVInput
              type={showPass? "text" : "password"}
              name="password"
              placeholder="Enter your password"
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

            <Label className="absolute right-0 mt-1.5 font-medium p-0.5 hover:underline cursor-pointer">Forget Password</Label>

          </div>
          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="border uppercase w-full bg-black text-white font-medium rounded active:scale-95 duration-500 cursor-pointer mt-5 lg:mt-10 py-3"
            >
              login
            </button>
          </div>
        </div>
      </LVForm>
    </>
  );
};

export default LoginForm;
