import LForm from "@/components/form/LForm";
import LInput from "@/components/form/LInput";
import LRadio from "@/components/form/LRadio";
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
import Spinner from "@/components/ui/spinner";
import { currentUser } from "@/redux/features/auth/authSlice";
import {
  useAddShippingAddressMutation,
  useDeleteShippingAddressMutation,
  useUpdateShippingAddressMutation,
} from "@/redux/features/buyer/buyerApi";
import { useAppSelector } from "@/redux/hook";
import { TError, TResponce, TShippingAddress } from "@/types";
import { ReactNode, useState } from "react";
import { FieldValues } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa6";
import { IoTrashBinOutline } from "react-icons/io5";
import { toast } from "sonner";

const AddressModal = ({
  data,
  method,
  children,
  title,
  refetch,
}: {
  data?: TShippingAddress;
  method: string;
  children: ReactNode;
  title: string;
  refetch: () => void;
}) => {
  const [openModal, setOpenModal] = useState(false);

  // Get userid
  const user = useAppSelector(currentUser);
  const userId = user?.userId;

  const [addShippingAddress, { isLoading }] = useAddShippingAddressMutation();
  const [deleteShippingAddress, { isLoading: deleting }] =
    useDeleteShippingAddressMutation();
  const [updateShippingAddress, {isLoading: updating}] = useUpdateShippingAddressMutation();

  const handleAddNewAddress = async (data: FieldValues) => {
    const toastId = toast.loading(null);
    try {
      const res = (await addShippingAddress([userId, data])) as TResponce;
      setOpenModal(false);
      refetch();
      toast.success(res?.data?.message, { id: toastId, duration: 3000 });
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  const handleEditShippingAddress = async (
    userId: string,
    shippingId: string,
    data: FieldValues
  ) => {
    const toastId = toast.loading(null);
    try {
      const res = await updateShippingAddress([userId, shippingId, data]);
      setOpenModal(false);
      refetch();
      toast.success(res?.data?.message, { id: toastId, duration: 3000 });
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  const handleDeleteShippingAddress = async (
    userId: string,
    shippingId: string
  ) => {
    const toastId = toast.loading(null);
    try {
      const res = await deleteShippingAddress([userId, shippingId]);
      setOpenModal(false);
      refetch();
      toast.success(res?.data?.message, { id: toastId, duration: 3000 });
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  const radioItems = [
    {
      id: "01",
      lable: "Home",
    },
    {
      id: "02",
      lable: "Office",
    },
  ];

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
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
          <LForm
            onSubmit={(formData) => {
              if (method === "edit" && data?._id) {
                handleEditShippingAddress(userId as string, data._id, formData);
              } else {
                handleAddNewAddress(formData);
              }
            }}
          >
            <div className="my-5">
              <Label className="mb-2">Address Category</Label>
              <div>
                <LRadio
                  name="addressCategory"
                  radioOptions={radioItems}
                  defaultValue={data?.addressCategory}
                />
              </div>

              <div className="border mt-5 border-gray-200"></div>
            </div>

            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label>Recipient's Name</Label>
                <LInput
                  type="text"
                  name="recipientsName"
                  placeholder="Enter Recipient's Name"
                  icon={false}
                  defaultValue={data?.recipientsName}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Phone Number</Label>
                <LInput
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  icon={false}
                  defaultValue={data?.phoneNumber}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Address</Label>
                <LInput
                  type="text"
                  name="address"
                  placeholder="House no./building/street/area"
                  icon={false}
                  defaultValue={data?.address}
                />
              </div>
              <div className="flex gap-3">
                <div className="space-y-1.5 w-full">
                  <Label>City</Label>
                  <LInput
                    type="text"
                    name="city"
                    placeholder="Please select your city"
                    icon={false}
                    defaultValue={data?.city}
                  />
                </div>
                <div className="space-y-1.5 w-full">
                  <Label>Postal Code</Label>
                  <LInput
                    type="text"
                    name="postalCode"
                    placeholder="Enter postal code"
                    icon={false}
                    defaultValue={data?.postalCode}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="space-y-1.5 w-full">
                  <Label>State</Label>
                  <LInput
                    type="text"
                    name="state"
                    placeholder="Please select your state"
                    icon={false}
                    defaultValue={data?.state}
                  />
                </div>
                <div className="space-y-1.5 w-full">
                  <Label>Country</Label>
                  <LInput
                    type="text"
                    name="country"
                    placeholder="Please select your country"
                    icon={false}
                    defaultValue={data?.country}
                  />
                </div>
              </div>

              <div className="mt-10 space-y-3">
                {method === "edit" && (
                  <div
                    onClick={() =>
                      handleDeleteShippingAddress(
                        userId as string,
                        data?._id as string
                      )
                    }
                    className="border border-[#31473A] w-full py-2 rounded-md font-medium cursor-pointer flex justify-center items-center gap-2.5"
                  >
                    {deleting ? (
                      <Spinner />
                    ) : (
                      <>
                        <span>
                          <IoTrashBinOutline className="text-lg" />
                        </span>
                        <span>Delete</span>
                      </>
                    )}
                  </div>
                )}
                <button
                  type="submit"
                  className="border border-[#31473A] w-full py-2 rounded-md font-medium bg-[#31473A] text-white cursor-pointer"
                >
                  {(isLoading || updating) ? <Spinner /> : "Save"}
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
