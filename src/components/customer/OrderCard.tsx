import { TOrderData } from "@/types/types";
import { BsBoxSeam } from "react-icons/bs";
import { format, addDays } from "date-fns";

const OrderCard = ({ order }: { order: TOrderData }) => {
  const { orderId, shippingAddress, createdAt, grandTotal, shippingMethod } =
    order;
  const {
    recipientsName,
    phoneNumber,
    address,
    city,
    postalCode,
    state,
    country,
  } = shippingAddress;

  const orderDate = format(new Date(createdAt), "do MMMM yyyy");

  let shippindDuration;
  if (shippingMethod === "standard") {
    shippindDuration = 6;
  } else if (shippingMethod === "second Day") {
    shippindDuration = 2;
  } else if (shippingMethod === "overnight") {
    shippindDuration = 1;
  }

  const duration = addDays(new Date(createdAt), shippindDuration as number);
  const shippingDate = format(new Date(duration), "do MMMM yyyy");

  return (
    <div className="border-b py-8 flex justify-between">
      <div className="font-bold text-sm space-y-1">
        <BsBoxSeam className="size-12" />
        <h1>
          <span className="text-gray-700">Order ID:</span> {orderId}
        </h1>
        <h1>
          <span className="text-gray-700">Order Date:</span> {orderDate}
        </h1>
        <h1>
          <span className="text-gray-700">Shipping Method:</span>{" "}
          {shippingMethod}
        </h1>
        <p className="font-semibold text-green-600">
          Estimated delivery Saturday {shippingDate}
        </p>
      </div>

      <div>
        <h1 className="font-semibold">Shipping Address</h1>
        <p className="text-sm font-medium text-gray-700 mt-3">
          {recipientsName} <br />
          {phoneNumber} <br />
          {address} <br />
          {city}-{postalCode}, {state} <br />
          {country}
        </p>
      </div>

      <div className="space-y-3">
        <h1 className="font-bold text-sm">
          <span className="text-gray-700">Total Price:</span> ${grandTotal}
        </h1>
        <button className="btn py-2.5">Order Details</button>
        <button className="btn py-2.5 bg-white border text-black">
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
