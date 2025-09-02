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
  { label: "January", value: "january" },
  { label: "February", value: "february" },
  { label: "March", value: "march" },
  { label: "April", value: "april" },
  { label: "May", value: "may" },
  { label: "June", value: "june" },
  { label: "July", value: "july" },
  { label: "August", value: "august" },
  { label: "September", value: "september" },
  { label: "October", value: "october" },
  { label: "November", value: "november" },
  { label: "December", value: "december" },
];

const dateOptions = generateDateAndYearOptions(1, 31);
const yearOptions = generateDateAndYearOptions(startYear, endYear);

const ProfileUpdateForm = ({
  customerData,
}: {
  customerData: TCustomerProfile;
}) => {

  const [defaultDate, defaultMonth, defaultYear]: string[] = customerData!.dateOfBirth!.replace(",", "").split(" ");

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
          <div className="space-y-1.5 w-full">
            <Label>First Name*</Label>
            <LVInput
              type="text"
              name="userName.firstName"
              defaultValue={customerData?.userName.firstName}
            />
          </div>
          <div className="space-y-1.5 w-full">
            <Label>Last Name*</Label>
            <LVInput
              type="text"
              name="userName.lastName"
              defaultValue={customerData?.userName.lastName}
            />
          </div>
        </div>

        <div className="space-y-1.5 w-full">
          <Label>Phone Number (Optional)</Label>
          <LVInput
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            defaultValue={customerData?.phoneNumber}
          />
        </div>

        <div className="space-y-1.5 w-full">
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

        <div className="space-y-1.5 w-full">
          <Label>Gender (Optional)</Label>
          <LVSelect
            name="gender"
            placeholder="Select Gender"
            options={genderOptions}
            defaultValue={customerData?.gender}
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
