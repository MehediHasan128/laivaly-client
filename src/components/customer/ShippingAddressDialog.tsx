import { ReactNode } from "react";
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
import { TShippingAddress } from "@/types/types";

const ShippingAddressDialog = async ({
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
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xl h-[80vh] overflow-scroll scrollbar-hide">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>

        <div className="my-10">
          <ShippingAddressForm userId={userId} defaultAddress={defaultAddress} method={method} />
        </div>

        <DialogFooter>
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShippingAddressDialog;
