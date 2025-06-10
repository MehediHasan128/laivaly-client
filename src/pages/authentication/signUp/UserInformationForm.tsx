import LDatePicker from "@/components/form/LDatePicker";
import LForm from "@/components/form/LForm";
import LInput from "@/components/form/LInput";
import LSelect from "@/components/form/LSelect";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/ui/spinner";
import { useAddBuyerInfoMutation } from "@/redux/features/buyer/buyerApi";
import { TError } from "@/types";
import { FieldValues } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

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
  const { userId } = useParams();
  const navigate = useNavigate();

  const [addBuyerInfo, { isLoading }] = useAddBuyerInfoMutation();

  const handleSubmitUserInformation = async(data: FieldValues) => {
    const userInfo = {
      gender: data?.gender,
      dateOfBirth: data?.dateOfBirth,
      phoneNumber: data?.phoneNumber,
    };

    const toastId = toast.loading(null);
    try {
      const res = await addBuyerInfo([userId, userInfo]).unwrap();
      toast.success(res?.message, { id: toastId, duration: 2000 });
      navigate('/');
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
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
            <div className="space-y-4">
              <div className="flex gap-5">
                <div className="w-full">
                  <Label>Gender</Label>
                  <LSelect
                    name="gender"
                    placeholder="Select gender"
                    options={genderOption}
                    className="flex justify-between w-full mt-2"
                  />
                </div>
                <div className="w-full">
                  <Label>Date of birth</Label>
                  <LDatePicker
                    name="dateOfBirth"
                    className="flex justify-between w-full mt-2 py-[22px]"
                  />
                </div>
              </div>
              <div>
                <Label>Phone Number</Label>
                <LInput
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  icon={false}
                  className="mt-2"
                />
              </div>
              <div>
                <button
                  className="w-full py-3 mt-3 rounded-lg text-sm font-medium border border-[#31473A] bg-[#31473A] text-white cursor-pointer active:scale-95 duration-1000"
                  type="submit"
                >
                  {isLoading ? <Spinner /> : 'Submit'}
                </button>
              </div>
            </div>
          </LForm>
        </div>
      </div>
    </div>
  );
};

export default UserInformationForm;
