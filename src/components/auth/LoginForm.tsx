"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";
import { Label } from "../ui/label";
import Spinner from "../reusable/Spinner";
import {
  handleCustomerLogin,
  handleForgetUserPassword,
} from "@/services/auth.services";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPassWrong, setIsPassWrong] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  return (
    <>
      <LVForm
        onSubmit={(data) =>
          handleCustomerLogin(data, setLoading, setIsPassWrong, router)
        }
      >
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
              className={`py-4 ${isPassWrong ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-black"}`}
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

            {isPassWrong && (
              <Label className="absolute left-0 mt-1.5 font-medium p-0.5 hover:underline cursor-pointer text-red-600">
                Incorrect password
              </Label>
            )}
            <Label
              onClick={() => handleForgetUserPassword(userEmail as string)}
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
