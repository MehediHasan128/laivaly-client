"use client";

import { generateDateAndYearOptions } from "@/utils";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";
import { Label } from "../ui/label";
import LVSelect from "../LVForm/LVSelect";

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

console.log(yearOptions);

const ProfileUpdateForm = () => {
  const handleUpdateCustomerInformation = async () => {
    console.log(5);
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
              defaultValue="Mehedi"
            />
          </div>
          <div className="space-y-1.5 w-full">
            <Label>Last Name*</Label>
            <LVInput
              type="text"
              name="userName.lastName"
              defaultValue="Hasan"
            />
          </div>
        </div>

        <div className="space-y-1.5 w-full">
          <Label>Phone Number (Optional)</Label>
          <LVInput
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
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
              />
            </div>
            <div className="w-full">
              <LVSelect
                name="date"
                options={monthOptions}
                placeholder="Select Moth"
              />
            </div>
            <div className="w-full">
              <LVSelect
                name="date"
                options={yearOptions}
                placeholder="Select Year"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5 w-full">
          <Label>Gender (Optional)</Label>
          <LVInput
            type="select"
            name="phoneNumber"
            defaultValue="Men"
            placeholder="Select Gender"
            options={genderOptions}
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
