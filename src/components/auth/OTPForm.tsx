"use client";

import { FieldValues } from "react-hook-form";
import LVForm from "../LVForm/LVForm";
import LVOTP from "../LVForm/LVOTP";
import Countdown from "../reusable/Countdown";
import { useRouter } from "next/navigation";
import Spinner from "../reusable/Spinner";
import { useState } from "react";
import { toast } from "sonner";
import { verifyCustomerEmail } from "@/lib/api/auth/auth";
import { TError, TResponce } from "@/types/types";

const OTPForm = ({ userEmail }: { userEmail: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleVerifyUserEmail = async (data: FieldValues) => {
    setLoading(true);
    const toastId = toast.loading("Loading...");

    try {
      const res = (await verifyCustomerEmail(data, userEmail)) as TResponce;
      console.log(res);
      toast.success(res.message, { id: toastId });
      router.push('/login');
      setLoading(false);
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
      setLoading(false);
    }
  };

  return (
    <LVForm onSubmit={handleVerifyUserEmail}>
      <div className="space-y-5">
        <LVOTP name="otp" />
        <div className="text-xs font-semibold flex justify-between items-center">
          <span className="text-gray-700 flex items-center gap-2">
            Remaining time: <Countdown />
          </span>
          <span className="text-gray-700">
            Didn&apos;t get the code?{" "}
            <button className="cursor-pointer underline text-black font-bold">
              Resend
            </button>
          </span>
        </div>
        <div>
          <button type="submit" className="btn uppercase hover:underline">
            {loading ? <Spinner /> : "verify"}
          </button>
        </div>
      </div>
    </LVForm>
  );
};

export default OTPForm;
