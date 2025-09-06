"use client";

import { toast } from "sonner";
import Spinner from "../reusable/Spinner";
import { TError, TResponce } from "@/types/types";
import { changeDefaultAddress } from "@/lib/api/customer/customerApi";
import { useState } from "react";

const ChangeDefaultAddress = ({
  userId,
  addressId,
}: {
  userId: string;
  addressId: string;
}) => {
  const [loading, setLoading] = useState(false);

  const changeDefaultShippingAddress = async (
    userId: string,
    addressId: string
  ) => {
    setLoading(true);
    const toastId = toast.loading("Loading..");
    try {
      const res = (await changeDefaultAddress(userId, addressId)) as TResponce;
      toast.success(res.message, { id: toastId });
      setLoading(false);
    } catch (err) {
      const error = err as TError;
      toast.error(error.data.message, { id: toastId });
      setLoading(false);
    }
  };

  return (
    <button
      onClick={() => changeDefaultShippingAddress(userId, addressId)}
      className="cursor-pointer hover:underline"
    >
      {
        loading ? <Spinner className="size-5" isDark={false} /> : "Set as default"
      }
    </button>
  );
};

export default ChangeDefaultAddress;
