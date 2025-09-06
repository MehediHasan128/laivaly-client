"use client";

import { toast } from "sonner";
import Spinner from "../reusable/Spinner";
import { TError, TResponce } from "@/types/types";
import { changeDefaultAddress } from "@/lib/api/customer/customerApi";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ChangeDefaultAddress = ({
  userId,
  addressId,
}: {
  userId: string;
  addressId: string;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      router.refresh();
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
