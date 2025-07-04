import { currentUser } from "@/redux/features/auth/authSlice";
import { useGetBuyerInfoFromDbQuery } from "@/redux/features/buyer/buyerApi";
import { useAppSelector } from "@/redux/hook";
import background from "../../assets/images/banner/background.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LForm from "@/components/form/LForm";
import { Label } from "@/components/ui/label";
import LInput from "@/components/form/LInput";
import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import LSelect from "@/components/form/LSelect";
import { LuMapPinned } from "react-icons/lu";
import AddressModal from "./AddressModal";
import { TShippingAddress } from "@/types";
import male from "../../assets/images/others/male.jpg";
import female from "../../assets/images/others/female.jpg";
import LDatePicker from "@/components/form/LDatePicker";
import { FieldValues } from "react-hook-form";
import { MdOutlineModeEditOutline } from "react-icons/md";
import UploadProfilePictureModal from "./UploadProfilePictureModal";

const MyAccount = () => {
  // Get user Id
  const user = useAppSelector(currentUser);
  const userId = user?.userId;

  const { data, refetch } = useGetBuyerInfoFromDbQuery(userId);

  const buyerData = data?.data;

  const updateUserInformation = async (data: FieldValues) => {
    console.log(data);
  };

  const [editName, setEditName] = useState(true);
  const [editEmail, setEditEmail] = useState(true);
  const [editOthers, setEditOthers] = useState(true);

  return (
    <div>
      <div className="relative">
        <img
          className="h-72 w-full object-cover rounded-3xl"
          src={background}
          alt=""
        />
        <div className="absolute top-[60%] left-[40%]">
          <div className="relative">
            <Avatar className="rounded-full border-[12px] border-gray-50 size-60">
              <AvatarImage
                src={
                  buyerData?.profileImage !== null
                    ? buyerData?.profileImage
                    : buyerData?.gender === "male"
                    ? male
                    : female
                }
                className="object-cover"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <UploadProfilePictureModal refetch={refetch}>
              <MdOutlineModeEditOutline />
            </UploadProfilePictureModal>
          </div>
        </div>
      </div>

      <div className="mt-[140px]">
        <div className="mt-5 flex gap-24">
          <div className="flex-1">
            <h1 className="mb-10 text-lg font-bold">Personal Information</h1>
            <LForm onSubmit={updateUserInformation}>
              <div className="space-y-5">
                <div className="flex gap-5">
                  <div className="space-y-2 flex-1">
                    <Label>First Name:</Label>
                    <LInput
                      type="text"
                      name="userName.firstName"
                      icon={false}
                      placeholder="First Name"
                      defaultValue={buyerData?.userName.firstName}
                      disabled={editName}
                    />
                  </div>

                  <div className="space-y-2 flex-1">
                    <Label>Last Name:</Label>
                    <LInput
                      type="text"
                      name="userName.lastName"
                      icon={false}
                      placeholder="First Name"
                      defaultValue={buyerData?.userName.lastName}
                      disabled={editName}
                    />
                  </div>

                  <FiEdit3
                    className="text-lg cursor-pointer"
                    onClick={() => setEditName(false)}
                  />
                </div>

                <div className="flex gap-5">
                  <div className="space-y-2 flex-grow">
                    <Label>Email:</Label>
                    <LInput
                      type="email"
                      name="userEmail"
                      icon={false}
                      placeholder="First Name"
                      defaultValue={buyerData?.userEmail}
                      disabled={editEmail}
                    />
                  </div>

                  <FiEdit3
                    className="text-lg cursor-pointer"
                    onClick={() => setEditEmail(false)}
                  />
                </div>

                <div className="flex gap-5">
                  <div className="w-full flex gap-3">
                    <div className="space-y-2 w-full">
                      <Label>Date of birth:</Label>
                      <LDatePicker
                        name="dateOfBith"
                        className="py-[22px]"
                        defaultValue={buyerData?.dateOfBirth}
                        disabled={editOthers}
                      />
                    </div>

                    <div className="space-y-2  w-full">
                      <Label>Gender:</Label>
                      <LSelect
                        name="gender"
                        placeholder="Select gender"
                        className="flex justify-between w-full"
                        options={[
                          { value: "male", label: "Male" },
                          { value: "female", label: "Female" },
                        ]}
                        disabled={editOthers}
                        defaultValue={buyerData?.gender}
                      />
                    </div>

                    <div className="space-y-2  w-full">
                      <Label>Phone number:</Label>
                      <LInput
                        type="text"
                        name="phoneNumber"
                        icon={false}
                        placeholder="Phone number"
                        defaultValue={buyerData?.phoneNumber}
                        disabled={editOthers}
                      />
                    </div>
                  </div>

                  <FiEdit3
                    className="text-lg cursor-pointer"
                    onClick={() => setEditOthers(false)}
                  />
                </div>

                <div className="space-x-3">
                  <button
                    type="submit"
                    className="bg-[#31473A] border border-[#31473A] text-white font-medium px-8 py-2.5 rounded-md active:scale-95 duration-700 cursor-pointer"
                  >
                    Update Profile
                  </button>
                  <button className="border border-[#31473A] font-medium px-8 py-2.5 rounded-md active:scale-95 duration-700 cursor-pointer">
                    Change password
                  </button>
                </div>
              </div>
            </LForm>
          </div>

          <div className="border border-gray-200 w-fit"></div>

          <div className="flex-1">
            <h1 className="mb-10 text-lg font-bold">Shipping Address</h1>

            {buyerData?.shippingAddress?.length < 2 && (
              <AddressModal
                method="add"
                title="Add New Address"
                refetch={refetch}
              >
                <div className="border border-dashed border-blue-300 rounded-md p-10 w-[80%] mb-3 flex justify-center items-center cursor-pointer active:scale-95 duration-700">
                  <h1 className="font-medium text-blue-300">
                    <span className="text-2xl">+</span> Add address
                  </h1>
                </div>
              </AddressModal>
            )}

            <div className="space-y-3">
              {buyerData?.shippingAddress?.map(
                (address: TShippingAddress, idx: number) => (
                  <div
                    key={address._id}
                    className="border border-gray-300 rounded-md p-5 w-[80%]"
                  >
                    <div className="flex gap-5">
                      <LuMapPinned className="text-3xl" />
                      <div className="flex-1">
                        <div className="flex gap-3 items-center">
                          <h1 className="font-bold">
                            {address.recipientsName}
                          </h1>
                          <p className="text-sm font-medium text-gray-500">
                            {address.phoneNumber}
                          </p>
                        </div>
                        <p className="text-sm my-3 font-medium w-[70%] text-gray-700">
                          {address.address}, {address.city} -{" "}
                          {address.postalCode}, {address.state},
                          {address.country}
                        </p>

                        <div className="flex gap-2">
                          <div className="border w-fit px-2 py-0.5 rounded-md text-xs font-bold">
                            <p>{address.addressCategory}</p>
                          </div>
                          {idx === 0 && (
                            <div className="border border-red-500 bg-red-50 text-red-700 w-fit px-2 py-0.5 rounded-md text-xs font-bold">
                              <p>Default Shipping Address</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <AddressModal
                          method="edit"
                          title="Edit My Address"
                          data={address}
                          refetch={refetch}
                        >
                          <h1 className="font-medium text-sm text-blue-700 cursor-pointer active:scale-95 duration-700">
                            Edit
                          </h1>
                        </AddressModal>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
