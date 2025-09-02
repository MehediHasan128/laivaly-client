import ProfileUpdateForm from "@/components/customer/ProfileUpdateForm";
import { getUserProfile } from "@/lib/api/user/user";
import { TCustomerProfile, TResponce } from "@/types/types";

export const metadata = {
  title: "My Profile",
  description:
    "Manage your Laivaly account profile. Update personal details, and account settings for a personalized shopping experience.",
  keywords: [
    "Laivaly profile",
    "my account",
    "account settings",
    "edit profile",
    "Laivaly user account",
  ],
};

const ProfilePage = async () => {
  const data = (await getUserProfile()) as TResponce;
  const customerData = data?.data as TCustomerProfile;

  return (
    <main className="space-y-10 md:space-y-16">
      <div className="font-medium">
        <div className="my-5 space-y-8">
          <div className="space-y-3">
            <h1 className="text-2xl">Personal Information</h1>
            <div className="border-t" />
          </div>

          <div className="my-5 space-y-5 md:space-y-8">
            <div>
              <h1 className="text-lg md:text-xl">Log In Information</h1>

              <div className="flex mt-5 gap-5 md:gap-10 lg:gap-16 text-sm lg:text-base">
                <div className="space-y-3 md:space-y-5 w-36 text-gray-700">
                  <h1>Email</h1>
                  <h1>Password</h1>
                </div>

                <div className="space-y-3 md:space-y-5">
                  <h1>{customerData?.userEmail}</h1>
                  <h1>
                    ***** <span className="underline cursor-pointer">Edit</span>
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl">About Me</h1>

              <div className="mt-5 text-sm lg:text-base">
                <h1 className="flex gap-10 lg:gap-16">
                  <span className="text-gray-700">Laivaly Member ID:</span>{" "}
                  <span>{customerData?.customerId}</span>
                </h1>

                <div className="mt-8 2xl:w-[60%]">
                  <ProfileUpdateForm customerData={customerData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
