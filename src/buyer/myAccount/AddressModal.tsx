import LForm from "@/components/form/LForm";
import LInput from "@/components/form/LInput";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";
import { FaChevronLeft } from "react-icons/fa6";

const AddressModal = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const handleAddNewAddress = async () => {
    console.log(5);
  };

  return (
    <Dialog>
      <DialogTrigger className="h-fit w-full" asChild>
        <button>{children}</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center py-5 border-b border-gray-300 flex items-center">
            <DialogClose asChild className="cursor-pointer">
              <FaChevronLeft />
            </DialogClose>
            <span className="flex-1">{title}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-5">
          <LForm onSubmit={handleAddNewAddress}>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label>Recipient's Name</Label>
                <LInput
                  type="text"
                  name=""
                  placeholder="Enter Recipient's Name"
                  icon={false}
                  className=""
                />
              </div>
              <div className="space-y-1.5">
                <Label>Phone Number</Label>
                <LInput
                  type="text"
                  name=""
                  placeholder="Enter phone number"
                  icon={false}
                  className=""
                />
              </div>
              <div className="space-y-1.5">
                <Label>Address</Label>
                <LInput
                  type="text"
                  name=""
                  placeholder="House no./building/street/area"
                  icon={false}
                  className=""
                />
              </div>
              <div className="flex gap-3">
                <div className="space-y-1.5 w-full">
                  <Label>City</Label>
                  <LInput
                    type="text"
                    name=""
                    placeholder="Please select your city"
                    icon={false}
                  />
                </div>
                <div className="space-y-1.5 w-full">
                  <Label>Postal Code</Label>
                  <LInput
                    type="text"
                    name=""
                    placeholder="Enter postal code"
                    icon={false}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="space-y-1.5 w-full">
                  <Label>State</Label>
                  <LInput
                    type="text"
                    name=""
                    placeholder="Please select your state"
                    icon={false}
                  />
                </div>
                <div className="space-y-1.5 w-full">
                  <Label>Country</Label>
                  <LInput
                    type="text"
                    name=""
                    placeholder="Please select your country"
                    icon={false}
                  />
                </div>
              </div>
            </div>
          </LForm>
        </div>

        <DialogFooter>
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddressModal;
