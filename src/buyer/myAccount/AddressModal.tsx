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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ReactNode } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { IoTrashBinOutline } from "react-icons/io5";

const AddressModal = ({
  method,
  children,
  title,
}: {
  method: string;
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

        <div>
          <div className="my-5">
            <Label className="mb-2">Address Category</Label>
            <RadioGroup className="flex" defaultValue="Home">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Home" id="r1" />
                <Label htmlFor="r1">Home</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Office" id="r2" />
                <Label htmlFor="r2">Office</Label>
              </div>
            </RadioGroup>

            <div className="border mt-5 border-gray-200"></div>
          </div>

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

              <div className="mt-10 space-y-3">
                {method === "edit" && (
                  <button className="border border-[#31473A] w-full py-2 rounded-md font-medium cursor-pointer flex justify-center items-center gap-2.5">
                    <span>
                      <IoTrashBinOutline className="text-lg" />
                    </span>
                    <span>Delete</span>
                  </button>
                )}
                <button className="border border-[#31473A] w-full py-2 rounded-md font-medium bg-[#31473A] text-white cursor-pointer">
                  Save
                </button>
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
