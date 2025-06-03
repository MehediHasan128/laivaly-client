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

const MyAccount = () => {
  // Get user Id
  const user = useAppSelector(currentUser);
  const userId = user?.userId;

  const { data } = useGetBuyerInfoFromDbQuery(userId);

  const buyerData = data?.data;

  const updateUserInformation = async () => {
    console.log(5);
  };

  const [editName, setEditName] = useState(true);
  const [editEmail, setEditEmail] = useState(true);
  const [editOthers, setEditOthers] = useState(true);

  return (
    <div>
      <div className="relative">
        <img
          className="h-80 w-full object-cover rounded-3xl"
          src={background}
          alt=""
        />
        <div className="absolute top-[60%] left-[40%]">
          <Avatar className="rounded-full border-[12px] border-gray-50 size-60">
            <AvatarImage
              src={buyerData?.profileImage}
              className="object-cover"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="mt-[140px]">
        <div className="mt-5 flex gap-24">
          <div>
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
                  <div className="space-y-2 flex-1">
                    <Label>Date of birth:</Label>
                    <LInput
                      type="date"
                      name="userName.firstName"
                      icon={false}
                      placeholder="Enter date of birth"
                      disabled={editOthers}
                    />
                  </div>

                  <div className="space-y-2 flex-1">
                    <Label>Gender:</Label>
                    <LSelect
                      name="gender"
                      placeholder="Select gender"
                      className="border w-full flex justify-between"
                      options={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                      ]}
                      disabled={editOthers}
                    />
                  </div>

                  <div className="space-y-2 flex-1">
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

                  <FiEdit3
                    className="text-lg cursor-pointer"
                    onClick={() => setEditOthers(false)}
                  />
                </div>

                <div className="space-x-3">
                  <button className="bg-[#31473A] border border-[#31473A] text-white font-medium px-8 py-2.5 rounded-md active:scale-95 duration-700 cursor-pointer">
                    Update Profile
                  </button>
                  <button className="border border-[#31473A] font-medium px-8 py-2.5 rounded-md active:scale-95 duration-700 cursor-pointer">
                    Change password
                  </button>
                </div>
              </div>
            </LForm>
          </div>

          <div className="border border-gray-200 h-80 w-fit"></div>

          <div className="flex-1">
            <h1 className="mb-10 text-lg font-bold">Shipping Address</h1>

            <AddressModal title="Add New Address">
              <div className="border border-dashed border-blue-300 rounded-md p-5 w-[60%] mb-3 flex justify-center items-center cursor-pointer active:scale-95 duration-700">
                <h1 className="font-medium text-blue-300">
                  <span className="text-2xl">+</span> Add address
                </h1>
              </div>
            </AddressModal>

            <div className="space-y-3">
              <div className="border border-gray-300 rounded-md p-5 w-[60%]">
                <div className="flex gap-5">
                  <LuMapPinned className="text-3xl" />
                  <div className="flex-1">
                    <div className="flex gap-3 items-center">
                      <h1 className="font-bold">Mehedi Hasan</h1>
                      <p className="text-sm font-medium text-gray-500">
                        01302557956
                      </p>
                    </div>
                    <p className="text-sm my-3 font-medium w-[70%] text-gray-700">
                      Mollertek Water Pump, Dhaka - 1230, Dhaka-North,
                      Bnagladesh
                    </p>

                    <div className="border w-fit px-2 py-0.5 rounded-md text-xs font-bold">
                      <p>Home</p>
                    </div>
                  </div>
                  <div>
                    <AddressModal title="Edit My Address">
                      <h1 className="font-medium text-sm text-blue-700 cursor-pointer active:scale-95 duration-700">
                        Edit
                      </h1>
                    </AddressModal>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-md p-5 w-[60%]">
                <div className="flex gap-5">
                  <LuMapPinned className="text-3xl" />
                  <div className="flex-1">
                    <div className="flex gap-3 items-center">
                      <h1 className="font-bold">Mehedi Hasan</h1>
                      <p className="text-sm font-medium text-gray-500">
                        01302557956
                      </p>
                    </div>
                    <p className="text-sm my-3 font-medium w-[70%] text-gray-700">
                      Mollertek Water Pump, Dhaka - 1230, Dhaka-North,
                      Bnagladesh
                    </p>

                    <div className="border w-fit px-2 py-0.5 rounded-md text-xs font-bold">
                      <p>Home</p>
                    </div>
                  </div>
                  <div>
                    <AddressModal title="Edit My Address">
                      <h1 className="font-medium text-sm text-blue-700 cursor-pointer active:scale-95 duration-700">
                        Edit
                      </h1>
                    </AddressModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
