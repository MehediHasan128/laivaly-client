import ProfileUpdateForm from "@/components/customer/ProfileUpdateForm";

export const metadata = {
  title: "My Profile",
  description: "Manage your Laivaly account profile. Update personal details, and account settings for a personalized shopping experience.",
  keywords: [
    "Laivaly profile",
    "my account",
    "account settings",
    "edit profile",
    "Laivaly user account"
  ]
};


const ProfilePage = () => {
  return (
    <main className="space-y-16">
      <div className="font-medium">
        <div className="my-5 space-y-8">
          <div className="space-y-3">
            <h1 className="text-2xl">Personal Information</h1>
            <div className="border-t" />
          </div>

          <div className="space-y-10">
            <div>
              <h1 className="text-xl">Log In Information</h1>

              <div className="flex mt-5 gap-10 text-sm">
                <div className="space-y-5 w-36 text-gray-700">
                  <h1>Email</h1>
                  <h1>Password</h1>
                </div>

                <div className="space-y-5">
                  <h1>bayzidahmed467@gmail.com</h1>
                  <h1>
                    ***** <span className="underline cursor-pointer">Edit</span>
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl">About Me</h1>

              <div className="mt-5 text-sm">
                <h1 className="flex gap-10">
                  <span className="text-gray-700">Laivaly Member ID:</span> <span>LVC-35F6S1</span>
                </h1>

                <div className="mt-8 w-[60%]">
                  <ProfileUpdateForm />
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
