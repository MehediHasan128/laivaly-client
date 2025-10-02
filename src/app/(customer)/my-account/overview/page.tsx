import EditPasswordDrawer from "@/components/customer/EditPasswordDrawer";
import { getUserProfile } from "@/lib/api/user/user";
import { TCustomerProfile } from "@/types/customer.type";
import { TResponce } from "@/types/types";

export const metadata = {
  title: "Account Overview",
  description:
    "Manage your Laivaly account. View orders, track shipments, update personal information, and manage your wishlist all in one place.",
  keywords: [
    "Laivaly account",
    "customer account",
    "order history",
    "track order",
    "wishlist",
    "profile settings",
    "Laivaly login",
    "Laivaly register",
  ],
};

const CustomerAccountPage = async () => {
  const data = (await getUserProfile()) as TResponce;
  const customerData = data?.data as TCustomerProfile;

  return (
    <main className="space-y-10 md:space-y-16">
      <div className="font-medium">
        <h1 className="text-2xl md:text-4xl">Overview</h1>

        <div className="my-5 space-y-5 md:space-y-8">
          <div className="space-y-3">
            <h1 className="text-xl md:text-2xl">Personal Information</h1>
            <div className="border-t" />
          </div>

          <div className="space-y-10">
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
                    *****{" "}
                    <EditPasswordDrawer>
                      <span className="underline cursor-pointer">Edit</span>
                    </EditPasswordDrawer>
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl">About Me</h1>

              <div className="flex mt-5 gap-5 md:gap-10 lg:gap-16 text-sm lg:text-base">
                <div className="space-y-3 md:space-y-5 w-36 text-gray-700">
                  <h1>Laivaly Member ID</h1>
                  <h1>Name</h1>
                  <h1>Phone Number</h1>
                  <h1>Birthday</h1>
                  <h1>Gender</h1>
                </div>
                <div className="space-y-3 md:space-y-5">
                  <h1>{customerData?.customerId}</h1>
                  <h1>
                    {customerData?.userName?.firstName}{" "}
                    {customerData?.userName?.lastName}
                  </h1>

                  <h1>
                    {customerData?.phoneNumber === null ? (
                      <span className="text-gray-700 underline cursor-pointer hover:text-black duration-500">
                        Add Phone Number
                      </span>
                    ) : (
                      customerData?.phoneNumber
                    )}
                  </h1>
                  <h1>
                    {customerData?.dateOfBirth === null ? (
                      <span className="text-gray-700 underline cursor-pointer hover:text-black duration-500">
                        Add Birthday
                      </span>
                    ) : (
                      customerData?.dateOfBirth
                    )}
                  </h1>
                  <h1>
                    {customerData?.gender === null ? (
                      <span className="text-gray-700 underline cursor-pointer hover:text-black duration-500">
                        Add Gender
                      </span>
                    ) : (
                      customerData?.gender
                    )}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {customerData?.shippingAddress.length > 1 && (
        <div className="font-medium">
          <div className="my-5 space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h1 className="text-lg md:text-2xl">Shipping Address</h1>
              <div className="border-t" />
            </div>

            <div>
              <div className="xl:w-[40%] space-y-3">
                <div className="text-xl">
                  <h1>Default Address</h1>
                </div>

                {customerData?.shippingAddress.map((address) => (
                  <div key={address._id}>
                    {address.defaultAddress && (
                      <div className="font-semibold text-gray-700">
                        <p>{address?.addressCategory},</p>

                        <h1>
                          {address?.recipientsName} <br />
                          {address?.phoneNumber} <br />
                          {address?.address} <br />
                          {address?.city}-{address?.postalCode},{" "}
                          {address?.state} <br />
                          {address?.country}
                        </h1>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CustomerAccountPage;
