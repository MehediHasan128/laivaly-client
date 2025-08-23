import { Plus } from "lucide-react";

const shippingAddress = true;

const CheckOutPage = () => {
  return (
    <main className="p-16">
      <div className="flex w-[80%] gap-10 mx-auto">
        {/* address section */}
        <div className="w-[60%] space-y-8">
          <div className="space-y-0.5">
            <h1 className="text-2xl font-medium">Hi Mehedi Hasan</h1>
            <p className="text-sm font-semibold text-gray-700">
              bayzidahmed467@gmail.com
            </p>
          </div>
          <div className="space-y-7 py-5">
            <h1 className="text-2xl font-medium">Shipping To,</h1>
            <div className="border-t" />
          </div>
          <div>
            {
                !shippingAddress && <button className="border rounded flex justify-center w-full py-4 hover:border-black cursor-pointer duration-500 gap-3 font-semibold"><Plus />New Address</button>
            }
          </div>

          <div>
            {
                shippingAddress && <div>

                    <div className="font-semibold text-gray-600">
                        <p>Home</p>
                    </div>

                </div>
            }
          </div>
        </div>
        {/* Order Summary */}
        <div className="w-[40%]">
          <h1>This is order summary</h1>
        </div>
      </div>
    </main>
  );
};

export default CheckOutPage;
