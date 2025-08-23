import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { NotebookPen, Plus } from "lucide-react";

const shippingAddress = true;

const shippingMethods = [
  {
    method: "Standard",
    value: "standard",
    charge: "9.95",
    estimatedTime: "3-6",
    date: "03/09/2025",
  },
  {
    method: "Second Day",
    value: "secondDay",
    charge: "24.00",
    estimatedTime: "2",
    date: "27/08/2025",
  },
  {
    method: "Overnight",
    value: "overNight",
    charge: "35.00",
    estimatedTime: "1",
    date: "26/08/2025",
  },
];

const CheckOutPage = () => {
  return (
    <main className="p-3 xl:p-16">
      <div className="flex flex-col lg:flex-row xl:w-[80%] lg:gap-10 mx-auto">
        {/* address section */}
        <div className="lg:w-[60%] space-y-3 lg:space-y-8">
          <div className="space-y-0.5">
            <h1 className="text-lg md:text-2xl font-medium">Hi Mehedi Hasan</h1>
            <p className="text-xs md:text-sm font-semibold text-gray-700">
              bayzidahmed467@gmail.com
            </p>
          </div>
          <div className="space-y-3 md:space-y-7 py-3 md:py-5">
            <h1 className="md:text-xl font-medium">Shipping To,</h1>
            <div className="border-t" />
          </div>
          <div>
            {!shippingAddress && (
              <button className="border rounded flex items-center justify-center w-full py-3 md:py-4 cursor-pointer duration-500 gap-3 font-semibold text-sm md:text-base bg-black text-white">
                <Plus className="size-5" />
                New Address
              </button>
            )}
          </div>

          <div>
            {shippingAddress && (
              <div className="space-y-5 md:space-y-10">
                <div className="font-medium text-gray-600 text-sm md:text-base">
                  <p>Home</p>
                  <h1 className="text-base md:text-xl">Mehedi Hasan</h1>
                  <p>+658036520</p>
                  <p>88 Apgar Rd #10-21 International Plaza</p>
                  <p>Long Valley, NJ 07853-3001</p>
                </div>

                <div className="flex gap-5">
                  <button className="border rounded flex justify-center items-center w-full py-3 md:py-4 hover:border-black cursor-pointer duration-500 gap-3 font-medium text-sm">
                    <Plus className="size-5" />
                    New Address
                  </button>
                  <button className="border rounded flex justify-center items-center w-full py-3 md:py-4 hover:border-black cursor-pointer duration-500 gap-3 font-medium text-sm">
                    <NotebookPen className="size-5" />
                    Edit Address
                  </button>
                </div>

                <div className="space-y-3 md:space-y-7 py-3 md:py-5">
                  <h1 className="md:text-xl font-medium">Shipping Method,</h1>
                  <div className="border-t" />
                </div>

                <div>
                  <RadioGroup defaultValue="standard">
                    {shippingMethods.map((method) => (
                      <div
                        key={method.value}
                        className="space-y-3 border-b pb-6 md:pb-10"
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem
                            value={method.value}
                            id={method.value}
                          />
                          <Label
                            htmlFor={method.value}
                            className="text-base font-medium cursor-pointer"
                          >
                            <span className="text-gray-600">
                              ${method.charge}
                            </span>{" "}
                            {method.method}
                          </Label>
                        </div>
                        <Label
                          htmlFor={method.value}
                          className="flex flex-col items-start cursor-pointer text-xs font-semibold text-gray-600"
                        >
                          <p>
                            Transit time {method.estimatedTime} business days
                          </p>
                          <p>
                            Estimated arrival on or before{" "}
                            <span className="text-black">{method.date}</span>
                          </p>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Order Summary */}
        <div className="lg:w-[40%] hidden lg:block">
          <h1>This is order summary</h1>
        </div>
      </div>
    </main>
  );
};

export default CheckOutPage;
