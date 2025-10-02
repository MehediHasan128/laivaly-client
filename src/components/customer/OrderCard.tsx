"use client";

import { BsBoxSeam } from "react-icons/bs";
import { format, addDays } from "date-fns";
import CancelOrderAlert from "./CancelOrderAlert";
import { TOrderData } from "@/types/order.type";

const OrderCard = ({ order }: { order: TOrderData }) => {
  const {
    _id,
    orderId,
    shippingAddress,
    createdAt,
    grandTotal,
    shippingMethod,
    orderStatus,
  } = order;
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

  const alertProps = {
    _id,
    orderId,
    orderDate,
    grandTotal,
  };

  let shippindDuration;
  if (shippingMethod === "standard") {
    shippindDuration = 6;
  } else if (shippingMethod === "second Day") {
    shippindDuration = 2;
  } else if (shippingMethod === "overnight") {
    shippindDuration = 1;
  }

  const duration = addDays(new Date(createdAt), shippindDuration as number);
  const shippingDate = format(new Date(duration), "EEEE, do MMMM yyyy");

  return (
    <div className="border-b py-8 flex flex-col xl:flex-row gap-5 xl:gap-0 justify-between">
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
        <p className="font-semibold text-green-700">
          Estimated delivery {shippingDate}
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
        {orderStatus === "pending" && (
          <CancelOrderAlert alertProps={alertProps} />
        )}
      </div>
    </div>
  );
};

export default OrderCard;
