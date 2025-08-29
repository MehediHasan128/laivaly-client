"use client";

import { FieldValues } from "react-hook-form";
import LVForm from "../LVForm/LVForm";
import LVOTP from "../LVForm/LVOTP";

const OTPForm = () => {
  const handleVerifyUserEmail = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <LVForm onSubmit={handleVerifyUserEmail}>
      <div className="space-y-5">
        <LVOTP name="otp" />
        <div className="text-xs font-semibold flex justify-between items-center">
          <span className="text-gray-700">
            Remaining tome: <span className="text-black font-bold">00:59</span>
          </span>
          <span className="text-gray-700">
            Didn&apos;t get the code?{" "}
            <button className="cursor-pointer underline text-black font-bold">
              Resend
            </button>
          </span>
        </div>
        <div>
          <button className="btn uppercase hover:underline">verify</button>
        </div>
      </div>
    </LVForm>
  );
};

export default OTPForm;
