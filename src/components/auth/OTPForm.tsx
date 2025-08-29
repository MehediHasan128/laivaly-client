"use client";

import { FieldValues } from "react-hook-form";
import LVForm from "../LVForm/LVForm";
import LVOTP from "../LVForm/LVOTP";
import Countdown from "../reusable/Countdown";
import { useVerifyUserEmailMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { TError, TResponce } from "@/types/types";
import { useRouter } from "next/navigation";
import Spinner from "../reusable/Spinner";

const OTPForm = ({ userEmail }: { userEmail: string }) => {
  const [verifyUserEmail, { isLoading }] = useVerifyUserEmailMutation();

  const router = useRouter();

  const handleVerifyUserEmail = async (data: FieldValues) => {
    const toastId = toast.loading(null);
    if (data?.otp) {
      try {
        const res = (await verifyUserEmail([data, userEmail]).unwrap()) as TResponce;
        toast.success(res?.message, { id: toastId });
        router.push("/login");
      } catch (err) {
        const error = err as TError;
        toast.error(error?.data?.message, { id: toastId });
      }
    }else{
      toast.warning('You cannot verify your profile without entering the OTP. Please check your email and try again.', { id: toastId });
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
            {isLoading ? <Spinner /> : "verify"}
          </button>
        </div>
      </div>
    </LVForm>
  );
};

export default OTPForm;
