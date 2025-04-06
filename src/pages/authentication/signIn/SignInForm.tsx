import LForm from "@/components/form/LForm";
import LInput from "@/components/form/LInput";
import { FieldValues } from "react-hook-form";
import { GoMail, GoLock } from "react-icons/go";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Spinner from "@/components/ui/spinner";



const SignInForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [login, setLogin] = useState(false);

  const userLogin = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <LForm onSubmit={userLogin}>
        <div className="space-y-5">

          {/* User email input */}
          <div className="relative">
            <LInput
              type="email"
              name="userEmail"
              placeholder="Enter user email"
              icon={true}
            />
            <span className="absolute top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
              <GoMail />
            </span>
          </div>

          {/* User password input */}
          <div className="relative">
            <LInput
              type={showPass ? "text" : "password"}
              name="userPassword"
              placeholder="*****"
              icon={true}
            />

            <span className="absolute top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-lg">
              <GoLock />
            </span>

            {showPass ? (
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-0 top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-xl cursor-pointer"
              >
                <AiOutlineEyeInvisible />
              </span>
            ) : (
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-0 top-0 h-full px-4 rounded-l-lg flex justify-center items-center text-xl cursor-pointer"
              >
                <AiOutlineEye />
              </span>
            )}

          </div>

        </div>

        {/* Sign in button */}
        <button onClick={() => setLogin(!login)} className="bg-[#31473A] hover:bg-[#203026] duration-500 w-full mt-8 py-3 rounded-lg text-md text-white cursor-pointer">
          {
            login? <Spinner /> : "SIGN IN"
          }
        </button>
      </LForm>
    </div>
  );
};

export default SignInForm;
