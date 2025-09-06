"use client";

import { useState } from "react";
import Spinner from "../reusable/Spinner";
import { toast } from "sonner";
import { TError, TResponce } from "@/types/types";
import { deleteShippingAddress } from "@/lib/api/customer/customerApi";
import { useRouter } from "next/navigation";

const RemoveShippingAddress = ({
  userId,
  addressId,
}: {
  userId: string;
  addressId: string;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRemoveShippingAddress = async (
    userId: string,
    addressId: string
  ) => {
    setLoading(true);
    const toastId = toast.loading("Loading...");
    try {
        const res = await deleteShippingAddress(userId, addressId) as TResponce;
        toast.success(res?.message, {id: toastId});
        setLoading(false);
        router.refresh();
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
      setLoading(false)
    }
  };

  return (
    <button
      onClick={() => handleRemoveShippingAddress(userId, addressId)}
      className="cursor-pointer hover:underline"
    >
      {loading ? <Spinner className="size-5" isDark={false} /> : "Remove"}
    </button>
  );
};

export default RemoveShippingAddress;
