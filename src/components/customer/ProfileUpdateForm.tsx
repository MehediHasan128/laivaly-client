"use client";

import { generateDateAndYearOptions } from "@/utils";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";
import { Label } from "../ui/label";
import LVSelect from "../LVForm/LVSelect";
import { TCustomerProfile, TError, TResponce } from "@/types/types";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { updateCustomerProfile } from "@/lib/api/customer/customerApi";

const startYear = new Date().getFullYear();
const endYear = startYear - 60;

const genderOptions = [
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
];

const monthOptions = [
  { label: "January", value: "January" },
  { label: "February", value: "February" },
  { label: "March", value: "March" },
  { label: "April", value: "April" },
  { label: "May", value: "May" },
  { label: "June", value: "June" },
  { label: "July", value: "July" },
  { label: "August", value: "August" },
  { label: "September", value: "September" },
  { label: "October", value: "October" },
  { label: "November", value: "November" },
  { label: "December", value: "December" },
];

const dateOptions = generateDateAndYearOptions(1, 31);
const yearOptions = generateDateAndYearOptions(startYear, endYear);

const ProfileUpdateForm = ({
  customerData,
}: {
  customerData: TCustomerProfile;
}) => {
  const dob = customerData?.dateOfBirth ?? "";
  const [defaultDate, defaultMonth, defaultYear]: string[] = dob.replace(",", "")
    .split(" ");

  const handleUpdateCustomerInformation = async (data: FieldValues) => {
    const { userName, phoneNumber, date, month, year, gender } = data;

    const updatedCustomerInfo = {
      userName,
      phoneNumber,
      gender,
      dateOfBirth: `${date} ${month}, ${year}`,
    };

    const toastId = toast.loading("Loading");
    try {
      const res = (await updateCustomerProfile(
        updatedCustomerInfo,
        customerData?.customerId
      )) as TResponce;
      toast.success(res?.message, { id: toastId });
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <LVForm onSubmit={handleUpdateCustomerInformation}>
      <div className="space-y-5">
        <div className="flex gap-5">
          <div className="w-full">
            <LVInput
              type="text"
              name="userName.firstName"
              defaultValue={customerData?.userName.firstName}
              label="First Name*"
            />
          </div>
          <div className="w-full">
            <LVInput
              type="text"
              name="userName.lastName"
              defaultValue={customerData?.userName.lastName}
              label="Last Name*"
            />
          </div>
        </div>

        <div className="w-full">
          <LVInput
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            defaultValue={customerData?.phoneNumber}
            label="Phone Number (Optional)"
          />
        </div>

        <div className="space-y-2 w-full">
          <Label>Birthday (Optional)</Label>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <LVSelect
                name="date"
                options={dateOptions}
                placeholder="Select Date"
                defaultValue={defaultDate}
              />
            </div>
            <div className="w-full">
              <LVSelect
                name="month"
                options={monthOptions}
                placeholder="Select Moth"
                defaultValue={defaultMonth}
              />
            </div>
            <div className="w-full">
              <LVSelect
                name="year"
                options={yearOptions}
                placeholder="Select Year"
                defaultValue={defaultYear}
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <LVSelect
            name="gender"
            placeholder="Select Gender"
            options={genderOptions}
            defaultValue={customerData?.gender}
            label="Gender (Optional)"
          />
        </div>

        <div>
          <button className="bg-black text-white rounded w-full py-4 cursor-pointer hover:underline active-btn">
            Update
          </button>
        </div>
      </div>
    </LVForm>
  );
};

export default ProfileUpdateForm;
