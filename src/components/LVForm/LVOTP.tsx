import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import React from "react";
import { Controller } from "react-hook-form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

interface TOTPprops {
  name: string;
}

const LVOTP = ({ name }: TOTPprops) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} {...field}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        )}
      />
    </div>
  );
};

export default LVOTP;
