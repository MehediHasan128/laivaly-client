import LForm from "@/components/form/LForm";
import LSelect from "@/components/form/LSelect";
import { Label } from "@/components/ui/label";
import { FieldValues } from "react-hook-form";

const genderOption = [
    {
        value: 'male',
        label: 'Male'
    },
    {
        value: 'female',
        label: 'Female'
    },
]

const UserInformationForm = () => {
  const handleSubmitUserInformation = (data: FieldValues) => {
    console.log(data);
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
            <div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <LSelect name="gender" placeholder="Select gender" options={genderOption} className="border w-full flex justify-between border-gray-300" />
              </div>
            </div>
          </LForm>
        </div>
      </div>
    </div>
  );
};

export default UserInformationForm;
