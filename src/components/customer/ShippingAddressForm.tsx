"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import LVForm from "../LVForm/LVForm";
import { FieldValues } from "react-hook-form";
import LVInput from "../LVForm/LVInput";
import { toast } from "sonner";
import { TError, TResponce, TShippingAddress } from "@/types/types";
import {
  addShippingAddress,
  updateShippingAddress,
} from "@/lib/api/customer/customerApi";
import Spinner from "../reusable/Spinner";
import { useRouter } from "next/navigation";

const ShippingAddressForm = ({
  userId,
  defaultAddress,
  method,
  onSuccess,
}: {
  userId: string;
  defaultAddress?: TShippingAddress;
  method?: string;
  onSuccess?: () => void;
}) => {
  const category = defaultAddress ? defaultAddress.addressCategory : "Home";
  const [addressCategory, setAddressCategory] = useState<string>(category);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handelAddShippingAddress = async (data: FieldValues) => {
    setLoading(true);
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
      setLoading(false);
      router.refresh();
      onSuccess?.();
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
      setLoading(false);
    }
  };

  const handleUpdateShippingAddress = async (data: FieldValues) => {
    setLoading(true);
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

    const updatedShippingAddress = {
      shippingAddress,
    };

    try {
      const res = (await updateShippingAddress(
        updatedShippingAddress,
        userId,
        defaultAddress?._id as string
      )) as TResponce;
      toast.success(res?.message, { id: toastId });
      setLoading(false);
      router.refresh();
      onSuccess?.();
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
      setLoading(false);
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

      <LVForm
        onSubmit={(formData) => {
          if (method === "edit") {
            handleUpdateShippingAddress(formData);
          } else {
            handelAddShippingAddress(formData);
          }
        }}
      >
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <LVInput
                type="text"
                name="recipientsName"
                placeholder="Enter Recipients Name"
                label="Recipients Name"
                defaultValue={defaultAddress?.recipientsName}
                required
              />
            </div>
            <div className="w-full">
              <LVInput
                type="text"
                name="phoneNumber"
                placeholder="Enter phone number"
                label="Phone Number"
                defaultValue={defaultAddress?.phoneNumber}
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
              defaultValue={defaultAddress?.address}
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
                defaultValue={defaultAddress?.city}
                required
              />
            </div>
            <div className="w-full">
              <LVInput
                type="text"
                name="postalCode"
                placeholder="Enter postal code"
                label="Postal Code"
                defaultValue={defaultAddress?.postalCode}
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
              defaultValue={defaultAddress?.state}
              required
            />
          </div>
          <div>
            <LVInput
              type="text"
              name="country"
              placeholder="Country"
              label="Country"
              defaultValue={defaultAddress?.country}
              required
            />
          </div>
          <div>
            <button className="btn mt-5 uppercase hover:underline">
              {loading ? <Spinner /> : "save"}
            </button>
          </div>
        </div>
      </LVForm>
    </div>
  );
};

export default ShippingAddressForm;
