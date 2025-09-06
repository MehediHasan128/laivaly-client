"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import LVForm from "../LVForm/LVForm";
import { FieldValues } from "react-hook-form";
import LVInput from "../LVForm/LVInput";

const ShippingAddressForm = ({ userId }: { userId: string }) => {
  const [addressCategory, setAddressCategory] = useState<string>("Home");

  const handelAddShippingAddress = async (data: FieldValues) => {
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
    console.log(shippingAddress);
  };

  return (
    <div className="space-y-10">
      <RadioGroup defaultValue={addressCategory} onValueChange={setAddressCategory} className="flex">
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
              />
            </div>
            <div className="w-full">
              <LVInput
                type="text"
                name="phoneNumber"
                placeholder="Enter phone number"
                label="Phone Number"
              />
            </div>
          </div>
          <div>
            <LVInput
              type="text"
              name="address"
              placeholder="House no. / Building / Street / Area"
              label="Address"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <LVInput
                type="text"
                name="city"
                placeholder="City"
                label="City"
              />
            </div>
            <div className="w-full">
              <LVInput
                type="text"
                name="postalCode"
                placeholder="Enter postal code"
                label="Postal Code"
              />
            </div>
          </div>
          <div>
            <LVInput
              type="text"
              name="state"
              placeholder="State"
              label="State"
            />
          </div>
          <div>
            <LVInput
              type="text"
              name="country"
              placeholder="Country"
              label="Country"
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
