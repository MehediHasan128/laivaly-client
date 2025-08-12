"use client";

import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LoginForm = ({formActions}: {formActions: (formData: FormData) => void}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <form action={formActions} className="space-y-3">
      {/* email input */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter laivaly email"
          className="outline-none border focus:border-black w-full rounded font-medium px-5 py-3"
        />
      </div>
      {/* password input */}
      <div className="relative">
        <input
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Enter password"
          className="outline-none border focus:border-black w-full rounded font-medium px-5 py-3"
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

        <h1 className="absolute right-0 font-medium p-0.5 hover:underline cursor-pointer">
          Forget Password
        </h1>
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

      <h1>
        Don’t have an account?{" "}
        <Link href="/" className="font-semibold underline cursor-pointer">
          Sign up for free.
        </Link>
      </h1>
    </form>
  );
};

export default LoginForm;
