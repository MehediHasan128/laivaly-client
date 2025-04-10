import LForm from "@/components/form/LForm";
import LInput from "@/components/form/LInput";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoLock, GoMail } from "react-icons/go";

const SignUpForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleSignUpUser = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <LForm onSubmit={handleSignUpUser}>
      <div className="space-y-4">
        <div className="flex gap-5">
          <LInput
            type="text"
            name="userName.firstName"
            placeholder="First name"
            icon={false}
          />
          <LInput
            type="text"
            name="userName.lastName"
            placeholder="Last name"
            icon={false}
          />
        </div>

        <div className="relative">
          <LInput
            type="email"
            name="userEmail"
            placeholder="Emaill Address"
            icon
          />
          <span className="absolute top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
            <GoMail />
          </span>
        </div>

        <div className="relative">
          <LInput
            type={showPass ? "text" : "password"}
            name="userPassword"
            placeholder="Enter password"
            icon
          />

          <span className="absolute top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
            <GoLock />
          </span>

          <div className="absolute top-0 right-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
            {showPass ? (
              <AiOutlineEye
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>

        <div className="relative">
          <LInput
            type={showConfirmPass ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
            icon
          />
          <span className="absolute top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
            <GoLock />
          </span>

          <div className="absolute top-0 right-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
            {showConfirmPass ? (
              <AiOutlineEye
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>

        <div>
            <button className="py-2.5 border rounded-lg w-full font-semibold">Sign Up</button>
        </div>
      </div>
    </LForm>
  );
};

export default SignUpForm;
