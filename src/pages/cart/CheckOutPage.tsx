import AddressModal from "@/buyer/myAccount/AddressModal";
import LForm from "@/components/form/LForm";
import LInput from "@/components/form/LInput";
import Container from "@/components/reusable/Container";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { currentUser } from "@/redux/features/auth/authSlice";
import { useGetBuyerInfoFromDbQuery } from "@/redux/features/buyer/buyerApi";
import { useGetAllProductFromCartQuery } from "@/redux/features/cart/cartApi";
import {
  useCreateStripeCheckoutSessionMutation,
  useOrderCashOnDeliveryMutation,
} from "@/redux/features/orders/orderApi";
import { useAppSelector } from "@/redux/hook";
import { TCartProduct, TError, TResponce, TShippingAddress } from "@/types";
import { useEffect, useState } from "react";
import { BsCreditCard } from "react-icons/bs";
import { FaCcStripe, FaPaypal } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const user = useAppSelector(currentUser);
  const userId = user?.userId;

  const { data, refetch } = useGetBuyerInfoFromDbQuery(userId);
  const buyerData = data?.data;

  const [selectedAddressId, setSelectedAddressId] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    if (buyerData?.shippingAddress?.length) {
      setSelectedAddressId(buyerData?.shippingAddress[0]._id);
    }
  }, [buyerData]);

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const { data: cartData } = useGetAllProductFromCartQuery(userId);
  const cartProducts = cartData?.data[0]?.items;

  // Calculate product costing
  const totalPrice = cartProducts?.reduce(
    (total: number, item: TCartProduct) =>
      total + Number(item?.productId?.price) * Number(item.quantity),
    0
  );
  const totalWeight = cartProducts?.reduce(
    (total: number, item: TCartProduct) =>
      total +
      Number(item.productId.weight.replace("kg", "")) * Number(item.quantity),
    0
  );
  const calculateTax = Number(
    ((totalPrice + Number(totalWeight * 5)) * 0.15).toFixed(2)
  );
  const finalPrice = Number(
    (totalPrice + totalWeight * 5 + calculateTax).toFixed(2)
  );

  const handleApplyCouponCode = () => {};

  const [createStripeCheckoutSession] =
    useCreateStripeCheckoutSessionMutation();
  const [orderCashOnDelivery] = useOrderCashOnDeliveryMutation();

  const handlePlacedOrder = async (method: string) => {
    const selectedProducts = cartProducts?.map((item: TCartProduct) => ({
      productId:
        typeof item.productId === "object" && item.productId._id
          ? item.productId._id
          : item.productId,
      quantity: item.quantity,
      color: item.color,
      size: item.size,
    }));
    const orderData = {
      userId,
      products: selectedProducts,
      shippingAddress: selectedAddressId,
      paymentMethod: method,
      orderDate: new Date(),
      paymentStatus: "unpaid",
      status: "pending",
      totalAmount: finalPrice,
    };

    if (method === "PayPal") {
      console.log("This is paypal method");
    } else if (method === "Stripe") {
      try {
        const res = await createStripeCheckoutSession(orderData);
        const link = res?.data.data;
        window.location.href = link;
      } catch (err) {
        console.log(err);
      }
    } else if (method === "Card") {
      console.log("This is card method");
    } else {
      try {
        const res = (await orderCashOnDelivery(
          orderData
        ).unwrap()) as TResponce;
        toast.success(res.message);
        navigate('/profile/my-orders')
      } catch (err) {
        const error = err as TError;
        toast.error(error?.data?.message);
      }
    }
  };

  return (
    <Container>
      <div className="min-h-screen pt-10 mb-20 flex gap-20">
        <div className="w-[50%] space-y-10">
          <div>
            <h1 className="font-medium">Shipping Address</h1>

            {buyerData?.shippingAddress.length === 0 && (
              <AddressModal
                method="add"
                title="Add new address"
                refetch={refetch}
              >
                <span className="border border-dashed w-[50%] h-24 flex justify-center items-center rounded-md border-blue-500 font-medium cursor-pointer bg-blue-50 text-blue-700 mt-3">
                  + Add address
                </span>
              </AddressModal>
            )}

            <RadioGroup
              value={selectedAddressId}
              onValueChange={(value) => {
                setSelectedAddressId(value);
              }}
              className="flex"
            >
              {buyerData?.shippingAddress.map((address: TShippingAddress) => (
                <div
                  className={`relative border w-[50%] p-5 rounded-md ${
                    address._id === selectedAddressId &&
                    "border-blue-500 bg-blue-50"
                  } font-medium cursor-pointer mt-3`}
                >
                  <div className="border w-fit rounded px-2 text-sm font-medium bg-blue-100">
                    {address.addressCategory}
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <h1>{address.recipientsName}</h1>
                    <p className="text-sm text-gray-700">
                      {address.phoneNumber}
                    </p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>
                      {address.address}, {address.city} - {address.postalCode},{" "}
                      {address.city}, {address.country}
                    </p>
                  </div>
                  <Label
                    htmlFor={address._id}
                    className="rounded-md absolute top-0 right-0 w-full h-full cursor-pointer"
                  >
                    <RadioGroupItem
                      value={address._id}
                      id={address._id}
                      className="absolute top-5 right-5"
                    />
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <h1 className="font-medium">Select Payment Method</h1>

            <RadioGroup
              onValueChange={(value) => setSelectedPaymentMethod(value)}
              className="mt-5 w-[100%] grid grid-cols-2"
            >
              <div
                className={`relative border ${
                  selectedPaymentMethod === "PayPal" &&
                  "border-blue-700 bg-blue-50"
                } rounded p-4 flex items-center gap-3`}
              >
                <FaPaypal className="text-3xl text-[#253b80]" />
                <h1 className="text-md font-medium">Pay with PayPal</h1>
                <RadioGroupItem
                  value="PayPal"
                  id="PayPal"
                  className="absolute right-6"
                />
              </div>
              <div
                className={`relative border ${
                  selectedPaymentMethod === "Stripe" &&
                  "border-blue-700 bg-blue-50"
                } rounded p-4 flex items-center gap-3`}
              >
                <FaCcStripe className="text-3xl text-[#0A2540]" />
                <h1 className="text-md font-medium">Pay with Stripe</h1>
                <RadioGroupItem
                  value="Stripe"
                  id="Stripe"
                  className="absolute right-6"
                />
              </div>
              <div
                className={`relative border ${
                  selectedPaymentMethod === "COD" &&
                  "border-blue-700 bg-blue-50"
                } rounded p-4 flex items-center gap-3`}
              >
                <GiTakeMyMoney className="text-3xl text-[#0A2540]" />
                <h1 className="text-md font-medium">Cash On Delivery</h1>
                <RadioGroupItem
                  value="COD"
                  id="COD"
                  className="absolute right-6"
                />
              </div>
              <div
                className={`relative border ${
                  selectedPaymentMethod === "Card" &&
                  "border-blue-700 bg-blue-50"
                } rounded p-4 flex items-center gap-3`}
              >
                <BsCreditCard className="text-3xl text-[#0A2540]" />
                <h1 className="text-md font-medium">Pay with Cards</h1>
                <RadioGroupItem
                  value="Card"
                  id="Card"
                  className="absolute right-6"
                />
              </div>
            </RadioGroup>
          </div>

          <div>
            <h1 className="font-medium">Order Items</h1>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {cartProducts?.map((product: TCartProduct) => (
                <div key={product._id} className="flex gap-2">
                  <img
                    className="w-[20%]"
                    src={product.productId.thumbnail}
                    alt=""
                  />
                  <div className="font-medium space-y-1 text-sm">
                    <h1 className="text-base">{product.productId.title}</h1>
                    <p>
                      <span className="text-gray-600">Price:</span> $
                      {product.productId.price}
                    </p>
                    <p>
                      <span className="text-gray-600">Size:</span>{" "}
                      {product.size}
                    </p>
                    <p>
                      <span className="text-gray-600">Qty:</span>{" "}
                      {product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <div className="w-[60%] mx-auto">
            <h1>Order Summary</h1>

            <div className="my-5 2xl:my-10">
              <p className="mb-3 font-medium">Do you have any coupon code?</p>
              <LForm onSubmit={handleApplyCouponCode}>
                <div className="flex items-center gap-3 w-full relative">
                  <LInput
                    type="text"
                    name="coupponCode"
                    placeholder="Enter coupon code"
                    icon={false}
                  />
                  <button
                    type="submit"
                    className="absolute right-0 border border-[#31473A]  bg-[#31473A] font-semibold py-2.5 px-5 text-white rounded-r-lg cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </LForm>
            </div>

            <div className="text-base 2xl:text-lg">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Sub Total:</span>
                  <span className="text-base 2xl:text-xl font-semibold">
                    ${totalPrice ? totalPrice.toFixed(2) : "0.00"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">
                    Estimated Shipping & Handling:
                  </span>
                  <span className="text-base 2xl:text-xl font-semibold">
                    ${totalWeight ? (totalWeight * 5).toFixed(2) : "0.00"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">
                    Estimated Tax:
                  </span>
                  <span className="text-base 2xl:text-xl font-semibold">
                    ${calculateTax ? calculateTax.toFixed(2) : "0.00"}
                  </span>
                </div>
              </div>

              <div className="border-b border-gray-300 my-5"></div>

              <div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600 text-xl">
                    Total:
                  </span>
                  <span className="text-2xl font-medium">
                    ${finalPrice ? finalPrice : "0.00"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-3.5">
              <button
                onClick={() => handlePlacedOrder(selectedPaymentMethod)}
                className="border border-[#31473A] bg-[#31473A] py-2 2xl:py-3 rounded-lg font-medium text-white text-center cursor-pointer hover:bg-[#1e3327] duration-700 w-full"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckOutPage;
