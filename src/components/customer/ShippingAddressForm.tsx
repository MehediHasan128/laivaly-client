"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import LVForm from "../LVForm/LVForm";
import { FieldValues } from "react-hook-form";
import LVInput from "../LVForm/LVInput";
import { toast } from "sonner";
import { TError, TResponce } from "@/types/types";
import { addShippingAddress } from "@/lib/api/customer/customerApi";

const ShippingAddressForm = ({ userId }: { userId: string }) => {
  const [addressCategory, setAddressCategory] = useState<string>("Home");

  const handelAddShippingAddress = async (data: FieldValues) => {
    const toastId = toast.loading("Loading...");
    const {
      recipientsName,
      phoneNumber,
      address,
      city,
      postalCode,
      state,
      country,
    } = data;
    const shippingAddress = {
      addressCategory,
      recipientsName,
      phoneNumber,
      address,
      city,
      postalCode,
      state,
      country,
    };

    try {
      const res = (await addShippingAddress(
        shippingAddress,
        userId
      )) as TResponce;
      toast.success(res?.message, { id: toastId });
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <div className="space-y-10">
      <RadioGroup
        defaultValue={addressCategory}
        onValueChange={setAddressCategory}
        className="flex"
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <RadioGroupItem value="Home" id="Home" className="cursor-pointer" />
          <Label htmlFor="Home" className="cursor-pointer">
            Home
          </Label>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <RadioGroupItem
            value="Office"
            id="Office"
            className="cursor-pointer"
          />
          <Label htmlFor="Office" className="cursor-pointer">
            Office
          </Label>
        </div>
      </RadioGroup>

      <LVForm onSubmit={handelAddShippingAddress}>
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <LVInput
                type="text"
                name="recipientsName"
                placeholder="Enter Recipients Name"
                label="Recipients Name"
                required
              />
            </div>
            <div className="w-full">
              <LVInput
                type="text"
                name="phoneNumber"
                placeholder="Enter phone number"
                label="Phone Number"
                required
              />
            </div>
          </div>
          <div>
            <LVInput
              type="text"
              name="address"
              placeholder="House no. / Building / Street / Area"
              label="Address"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <LVInput
                type="text"
                name="city"
                placeholder="City"
                label="City"
                required
              />
            </div>
            <div className="w-full">
              <LVInput
                type="text"
                name="postalCode"
                placeholder="Enter postal code"
                label="Postal Code"
                required
              />
            </div>
          </div>
          <div>
            <LVInput
              type="text"
              name="state"
              placeholder="State"
              label="State"
              required
            />
          </div>
          <div>
            <LVInput
              type="text"
              name="country"
              placeholder="Country"
              label="Country"
              required
            />
          </div>
          <div>
            <button className="btn mt-5 uppercase hover:underline">Add</button>
          </div>
        </div>
      </LVForm>
    </div>
  );
};

export default ShippingAddressForm;
