import { ReactNode, use } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ShippingAddressForm from "./ShippingAddressForm";
import { currentUser } from "@/lib/api/currentUser";
import { TUser } from "@/types/types";

const AddShippingAddressDialog = async ({
  children,
  dialogTitle,
}: {
  children: ReactNode;
  dialogTitle?: string;
}) => {
  const user = (await currentUser()) as TUser;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xl h-[80vh] overflow-scroll scrollbar-hide">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>

        <div className="my-10">
          <ShippingAddressForm userId={user?.id} />
        </div>

        <DialogFooter>
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddShippingAddressDialog;
