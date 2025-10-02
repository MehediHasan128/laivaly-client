import ChangeDefaultAddress from "@/components/customer/ChangeDefaultAddress";
import RemoveShippingAddress from "@/components/customer/RemoveShippingAddress";
import ShippingAddressDialog from "@/components/customer/ShippingAddressDialog";
import { Label } from "@/components/ui/label";
import { currentUser } from "@/lib/api/currentUser";
import { getShippingAddress } from "@/lib/api/customer/customerApi";
import { TShippingAddress } from "@/types/customer.type";
import { TResponce } from "@/types/types";
import { TUser } from "@/types/user.type";

export const metadata = {
  title: "Shipping Addresses",
  description:
    "Manage your saved addresses for faster checkout on Laivaly. Add, edit, or remove delivery and billing addresses easily.",
  keywords: [
    "Laivaly address",
    "delivery address",
    "billing address",
    "manage addresses",
    "Laivaly account",
  ],
};

const Addresspage = async () => {
  const user = (await currentUser()) as TUser;

  const { data: shippingAddress } = (await getShippingAddress(
    user?.id
  )) as TResponce;

  return (
    <main className="space-y-10 md:space-y-16">
      <div className="space-y-5">
        <h1 className="text-xl md:text-2xl font-semibold">Shipping Address</h1>
        <div className="border-t" />
      </div>
      <div>
        {!shippingAddress.length && (
          <div className="font-medium text-gray-700 space-y-2">
            <h1 className="md:text-xl">No addresses saved yet</h1>
            <p className="text-sm md:text-base">
              Save your delivery and billing addresses for faster checkout.
            </p>
          </div>
        )}

        <div>
          {shippingAddress?.map((address: TShippingAddress) => (
            <div key={address._id} className="border-b py-8">
              <div className="flex justify-between items-start">
                {address?.defaultAddress && (
                  <Label className="text-lg font-medium">Default Address</Label>
                )}
                {!address?.defaultAddress && (
                  <div className="font-semibold text-gray-600 text-sm lg:text-base">
                    <p>{address?.addressCategory},</p>

                    <h1>
                      {address?.recipientsName} <br />
                      {address?.phoneNumber} <br />
                      {address?.address} <br />
                      {address?.city}-{address?.postalCode}, {address?.state}{" "}
                      <br />
                      {address?.country}
                    </h1>
                  </div>
                )}
                <div className="font-medium flex flex-col xl:flex-row items-end xl:items-center gap-2 xl:gap-5 text-sm lg:text-base">
                  {!address?.defaultAddress && (
                    <ChangeDefaultAddress
                      userId={user?.id}
                      addressId={address?._id}
                    />
                  )}
                  <ShippingAddressDialog
                    dialogTitle="Edit Shipping Address"
                    userId={user?.id}
                    defaultAddress={address}
                    method="edit"
                  >
                    <button className="cursor-pointer hover:underline">
                      Edit
                    </button>
                  </ShippingAddressDialog>
                  {!address?.defaultAddress && (
                    <RemoveShippingAddress
                      userId={user?.id}
                      addressId={address?._id}
                    />
                  )}
                </div>
              </div>

              {address?.defaultAddress && (
                <div className="mt-5 font-semibold text-gray-600 text-sm lg:text-base">
                  <p>{address?.addressCategory},</p>

                  <h1>
                    {address?.recipientsName} <br />
                    {address?.phoneNumber} <br />
                    {address?.address} <br />
                    {address?.city}-{address?.postalCode}, {address?.state}{" "}
                    <br />
                    {address?.country}
                  </h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <ShippingAddressDialog
          dialogTitle="Add New Shipping Address"
          userId={user?.id}
        >
          <button className="btn">Add a New Shipping Address</button>
        </ShippingAddressDialog>
      </div>
      <div>
        <p className="text-sm md:text-base font-medium text-gray-700 md:leading-7">
          You can save multiple addresses for home, work, or friends & family.{" "}
          <br /> Your address details are private and secure with Laivaly
        </p>
      </div>
    </main>
  );
};

export default Addresspage;
