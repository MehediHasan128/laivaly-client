"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TError, TResponce } from "@/types/types";
import { CalculateProductTotalPriceShippingAndTax } from "@/utils";
import { NotebookPen, Plus } from "lucide-react";
import CartSummary from "../cart/CartSummary";
import ProductCheckoutCard from "@/components/reusable/ProductCheckoutCard";
import { useEffect, useState } from "react";
import AddressDrawer from "./AddressDrawer";
import Spinner from "@/components/reusable/Spinner";
import { authGuard } from "@/utils/authGuard";
import { removeOrderData, storeOrderData } from "@/lib/api/orders/orders";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { TCartProduct } from "@/types/cart.type";
import { TCustomerProfile, TShippingAddress } from "@/types/customer.type";
import { TOrderData, TOrderItems } from "@/types/order.type";
import { TCheckoutProduct } from "@/types/checkout.type";

const shippingAddress = true;

function addDays(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString("en-GB");
}

const Checkout = ({
  products,
  userData,
}: {
  products: TCheckoutProduct[];
  userData: TCustomerProfile;
}) => {
  // Router for refreshing and redirect route
  const router = useRouter();

  // Get Shipping method and shipping address
  const [shippingMethod, setShippingMethod] = useState<string>("standard");
  const [address, setAddress] = useState<TShippingAddress | undefined>(
    userData?.shippingAddress.find((address) => address.defaultAddress === true)
  );
  // Set loading state for button loading
  const [loading, setLoading] = useState<boolean>(false);

  // Cal culate product price shipping charge tax
  const { subTotal, shippingCharge, tax, grandTotal } =
    CalculateProductTotalPriceShippingAndTax(products, shippingMethod);

  console.log(userData);

  // Shipping method
  const shippingMethods = [
    {
      method: "Standard",
      value: "standard",
      charge: subTotal >= 100 ? "Free" : "9.95",
      estimatedTime: "3-6",
      date: `${addDays(3)} - ${addDays(6)}`,
    },
    {
      method: "Second Day",
      value: "second Day",
      charge: "24.00",
      estimatedTime: "2",
      date: `${addDays(2)}`,
    },
    {
      method: "Overnight",
      value: "overnight",
      charge: "35.00",
      estimatedTime: "1",
      date: `${addDays(1)}`,
    },
  ];

  const items = products.map((order: TCartProduct) => ({
    productId: order?.productId._id,
    title: order?.productId.title,
    productFor: order?.productId.productFor,
    price: order?.productId.price,
    discount: order?.productId.discount,
    productImages: order?.productId.productImages[0],
    quantity: order?.quantity,
    color: order?.selectedVariant.color,
    size: order?.selectedVariant.size,
    SKU: order?.selectedVariant.SKU,
  }));

  const orderData = {
    userId: userData?.userId._id,
    orderItems: items,
    subTotal,
    shippingCharge,
    tax,
    grandTotal,
    shippingMethod,
    shippingAddress: address,
  };

  const handleStoreOrderData = async (data: TOrderData) => {
    await authGuard();

    setLoading(true);
    try {
      (await storeOrderData(data)) as TResponce;
      router.push("/checkout/payment");
      setLoading(false);
    } catch (err) {
      const toastId = toast.loading("Loading");
      const error = err as TError;
      console.log(error);
      toast.error(error?.data?.message, { id: toastId });
      setLoading(false);
    }
  };

  useEffect(() => {
    const data = async () => {
      try {
        removeOrderData("orderData");
      } catch (err) {
        return err;
      }
    };
    data();
  }, []);

  return (
    <>
      {/* address and shipping method section */}
      <div className="lg:w-[60%] xl:w-[50%] 2xl:w-[60%] space-y-3 lg:space-y-5">
        <div className="space-y-0.5">
          <h1 className="text-lg md:text-2xl font-medium">
            Hi {userData?.userName.firstName} {userData?.userName.lastName}
          </h1>
          <p className="text-xs md:text-sm font-semibold text-gray-700">
            {userData?.userEmail}
          </p>
        </div>

        <div className="space-y-3 md:space-y-5 py-3 md:py-5">
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
                <p>{address?.addressCategory}</p>
                <h1 className="text-base md:text-xl">
                  {address?.recipientsName}
                </h1>
                <p>{address?.phoneNumber}</p>
                <p>{address?.address}</p>
                <p>
                  {address?.city}-{address?.postalCode}
                </p>
                <p>
                  {address?.state}, {address?.country}
                </p>
              </div>

              <div className="flex gap-5">
                <button className="border rounded flex justify-center items-center w-full py-3 md:py-4 hover:border-black cursor-pointer duration-500 gap-3 font-medium text-xs md:text-sm">
                  <Plus className="size-4 md:size-5" />
                  New Address
                </button>
                <AddressDrawer
                  shippingAddress={userData?.shippingAddress}
                  defaultAddress={address as TShippingAddress}
                  setShippingAddress={setAddress}
                >
                  <button className="border rounded flex justify-center items-center w-full py-3 md:py-4 hover:border-black cursor-pointer duration-500 gap-3 font-medium text-xs md:text-sm">
                    <NotebookPen className="size-4 md:size-5" />
                    Another Address
                  </button>
                </AddressDrawer>
              </div>
            </div>
          )}
        </div>

        {/* Shipping Method */}
        <div>
          <div className="space-y-3 md:space-y-7 py-3 md:py-5">
            <h1 className="md:text-xl font-medium">Shipping Method,</h1>
            <div className="border-t" />
          </div>

          <div>
            <RadioGroup
              defaultValue="standard"
              onValueChange={(value) => {
                setShippingMethod(value);
              }}
            >
              {shippingMethods.map((method) => (
                <div
                  key={method.value}
                  className="space-y-3 border-b pb-6 md:pb-10"
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={method.value} id={method.value} />
                    <Label
                      htmlFor={method.value}
                      className="text-base font-medium cursor-pointer"
                    >
                      <span
                        className={`${
                          method.value === "standard"
                            ? subTotal >= 100
                              ? "text-red-700"
                              : "text-gray-600"
                            : "text-gray-600"
                        }`}
                      >
                        {method.value === "standard"
                          ? subTotal >= 100
                            ? ""
                            : "$"
                          : "$"}
                        {method.charge}
                      </span>{" "}
                      {method.method}
                    </Label>
                  </div>
                  <Label
                    htmlFor={method.value}
                    className="flex flex-col items-start cursor-pointer text-xs font-semibold text-gray-600"
                  >
                    <p>Transit time {method.estimatedTime} business days</p>
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

        <div className="w-full mt-10">
          <button
            onClick={() => handleStoreOrderData(orderData as TOrderData)}
            className="btn hover:underline"
          >
            {loading ? <Spinner /> : "Continue To Payment"}
          </button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:w-[40%] xl:w-[50%] 2xl:w-[40%]">
        <div className="space-y-5 xl:px-20 xl:sticky xl:top-20">
          <CartSummary
            totalItems={products.length}
            subTotal={subTotal}
            shippingCharge={shippingCharge}
            tax={tax}
            grandTotal={grandTotal}
          />

          <div className="mt-5">
            <h1 className="text-sm font-medium">In your Shopping Bag</h1>

            <div className="flex flex-col gap-3 mt-5">
              {items.map((item) => (
                <ProductCheckoutCard
                  key={item.productId}
                  orderItems={item as TOrderItems}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
