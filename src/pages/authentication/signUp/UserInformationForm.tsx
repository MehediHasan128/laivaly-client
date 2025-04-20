import LDatePicker from "@/components/form/LDatePicker";
import LForm from "@/components/form/LForm";
import LInput from "@/components/form/LInput";
import LSelect from "@/components/form/LSelect";
import { Label } from "@/components/ui/label";
import { FieldValues } from "react-hook-form";

const genderOption = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

const UserInformationForm = () => {
  const handleSubmitUserInformation = (data: FieldValues) => {
    const userInformation = {
      gender: data?.gender,
      dateOfBirth: data?.dateOfBirth,
      phoneNumber: data?.phoneNumber,
      shippingAddress: [data?.shippingAddress]
    };

    console.log(userInformation);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Laivaly!</h1>
          <p className="font-medium text-lg mt-5 text-gray-600">
            You've successfully created your account! <br />
            Now let's complete your profile to give you the best shopping
            experience possible. <br />
            Please fill out the remaining details below — it only takes a
            minute!
          </p>
        </div>

        <div className="mt-10">
          <LForm onSubmit={handleSubmitUserInformation}>
            <div className="space-y-2">
              <div className="flex justify-between gap-3">
                <div className="space-y-2 w-full">
                  <Label>Gender</Label>
                  <LSelect
                    name="gender"
                    placeholder="Select gender"
                    options={genderOption}
                    className="border w-full flex justify-between border-gray-300 py-5"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label>Date of Birth</Label>
                  <LDatePicker name="dateOfBirth" />
                </div>
              </div>

              <div>
                <div className="space-y-2 w-full">
                  <Label>Phone Number</Label>
                  <LInput
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter you phone number"
                    icon={false}
                  />
                </div>
              </div>

              <div className="w-full flex items-center my-5">
                <div className="border-t w-full border-gray-300"></div>
                <span className="text-sm text-gray-600 font-medium bg-white w-[55%] flex justify-center">
                  Shipping Address
                </span>
                <div className="border-t w-full border-gray-300"></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2 w-full">
                  <Label>Street</Label>
                  <LInput
                    type="text"
                    name="shippingAddress.street"
                    placeholder="Enter you phone number"
                    icon={false}
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label>City</Label>
                  <LInput
                    type="text"
                    name="shippingAddress.city"
                    placeholder="Enter you phone number"
                    icon={false}
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label>State</Label>
                  <LInput
                    type="text"
                    name="shippingAddress.state"
                    placeholder="Enter you phone number"
                    icon={false}
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label>Postal Code</Label>
                  <LInput
                    type="text"
                    name="shippingAddress.postalCode"
                    placeholder="Enter you phone number"
                    icon={false}
                  />
                </div>
              </div>

              <div>
                <div className="space-y-2 w-full">
                  <Label>Country</Label>
                  <LInput
                    type="text"
                    name="shippingAddress.country"
                    placeholder="Enter your country name"
                    icon={false}
                  />
                </div>
              </div>

              <button
                className="px-5 py-2 mt-5 rounded-lg text-sm font-medium bg-[#31473A] text-white cursor-pointer"
                type="submit"
              >
                Submit
              </button>
            </div>
          </LForm>
        </div>
      </div>
    </div>
  );
};

export default UserInformationForm;
