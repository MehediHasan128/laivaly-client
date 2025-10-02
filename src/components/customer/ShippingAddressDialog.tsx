"use client";

import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ShippingAddressForm from "./ShippingAddressForm";
import { TShippingAddress } from "@/types/customer.type";

const ShippingAddressDialog = ({
  children,
  dialogTitle,
  userId,
  defaultAddress,
  method
}: {
  children: ReactNode;
  dialogTitle?: string;
  userId: string;
  defaultAddress?: TShippingAddress;
  method?: string;
}) => {

  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xl h-[80vh] overflow-scroll scrollbar-hide">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>

        <div className="my-10">
          <ShippingAddressForm userId={userId} defaultAddress={defaultAddress} method={method} onSuccess={() => setOpen(false)} />
        </div>

        <DialogFooter>
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShippingAddressDialog;
