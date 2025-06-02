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
import { Checkbox } from "@/components/ui/checkbox";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";

const MyAccount = () => {
  // Get user Id
  const user = useAppSelector(currentUser);
  const userId = user?.userId;

  const { data } = useGetBuyerInfoFromDbQuery(userId);

  const buyerData = data?.data;
  console.log(buyerData);

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
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
              </div>
            </LForm>
          </div>

          <div className="border border-gray-200 h-80 w-fit"></div>

          <div className="flex-1">
            <h1 className="mb-10 text-lg font-bold">Shipping Address</h1>

            <div className="space-y-5">
              <div className="border border-gray-200 p-5 w-[70%] rounded-xl">
                <h2 className="font-semibold mb-3 flex justify-between">
                  <span>Address - 1</span>{" "}
                  <span className="flex items-center gap-2.5">
                    <Checkbox className="cursor-pointer" />
                  </span>
                </h2>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-lg font-semibold">House-15, Road-10</h1>
                    <p className="font-semibold text-gray-600">
                      Sector-4, Dhaka - 1230, Bangladesh
                    </p>
                  </div>

                  <div className="space-y-3">
                    <BiEdit className="text-xl cursor-pointer" />
                    <MdOutlineDeleteOutline className="text-xl cursor-pointer" />
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
