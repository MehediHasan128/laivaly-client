"use client";

import { FieldValues } from "react-hook-form";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";
import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { useCreateCustomerAccountMutation } from "@/redux/features/customer/customerApi";
import { toast } from "sonner";

const SignupForm = () => {
  const [givenPassword, setGivenPassword] = useState<string | null>(null);

  //   Check the password is 8 characters long
  const passLength = (givenPassword?.length ?? 0) >= 8;
  //   Check the password have at least on uppercase
  const passHaveCapitalLetter = /[A-Z]/.test(givenPassword as string);
  //   Check the password have at least on special characters
  const passHaveSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(givenPassword as string);
  //   Check the password have contain one number
  const passHaveNumber = /[0-9]/.test(givenPassword as string);

  const [createCustomerAccount, {isLoading}] = useCreateCustomerAccountMutation();

  const handleCreateCustomerAccount = async (data: FieldValues) => {
    
    const toastId = toast.loading(null);

    const {userName, userEmail, password, confirmPassword} = data;

    if(password === confirmPassword && passLength && passHaveCapitalLetter && passHaveSpecialChar && passHaveNumber){

    }else{
      if(!passLength){
        toast.warning('Password must be at least 8 characters long', { id: toastId });
      }else if(!passHaveCapitalLetter){
        toast.warning('Password must contain at least one uppercase letter', { id: toastId });
      }else if(!passHaveSpecialChar){
        toast.warning('Password must contain at least one special character', { id: toastId });
      }else if(!passHaveNumber){
        toast.warning('Password must contain at least one number', { id: toastId });
      }else{
        toast.warning('Confirm password must be the same as password', { id: toastId });
      }
    }

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
          <div className="w-full">
            <LVInput
              type="text"
              name="password"
              placeholder="Enter your password"
              setInputValue={setGivenPassword}
            />
          </div>
          <div className="w-full">
            <LVInput
              type="text"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
        </div>

        {givenPassword && (
          <div>
            <span className={`font-semibold flex items-center gap-1 text-sm ${passLength && 'text-green-600'}`}>
              <CircleCheck className="size-4" />
              Password must be at least 8 characters long
            </span>
            <span className={`font-semibold flex items-center gap-1 text-sm ${passHaveCapitalLetter && 'text-green-600'}`}>
              <CircleCheck className="size-4" />
              Password must contain at least one uppercase letter
            </span>
            <span className={`font-semibold flex items-center gap-1 text-sm ${passHaveSpecialChar && 'text-green-600'}`}>
              <CircleCheck className="size-4" />
              Password must contain at least one special character
            </span>
            <span className={`font-semibold flex items-center gap-1 text-sm ${passHaveNumber && 'text-green-600'}`}>
              <CircleCheck className="size-4" />
              Password must contain at least one number
            </span>
          </div>
        )}

        <div>
          <button className="uppercase border w-full bg-black text-white rounded cursor-pointer active:scale-95 duration-500 py-3">
            continue
          </button>
        </div>
      </div>
    </LVForm>
  );
};

export default SignupForm;
