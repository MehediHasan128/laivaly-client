import { TOrderData, TOrderItems } from "@/types/order.type";
import Image from "next/image";
import { GetColorName } from "hex-color-to-color-name";

const OrderDetils = ({ order }: { order: TOrderData }) => {
  const {
    orderId,
    orderItems,
    subTotal,
    shippingCharge,
    tax,
    grandTotal,
    shippingMethod,
    paymentMethod,
    paymentStatus,
    orderStatus
  } = order;

  return (
    <div className="my-5 flex flex-col h-full">
      <div>
        <h1 className="px-5 font-bold text-gray-700">
          {orderItems.length} items
        </h1>
        {orderItems.map((item: TOrderItems) => (
          <div key={item?.SKU} className="p-3 md:p-5 border-b">
            <div className="flex gap-2">
              <div className="relative h-28 md:h-42 w-[20%]">
                <Image
                  src={item.productImages}
                  alt={item.title}
                  fill
                  quality={100}
                />
              </div>
              <div className="text-xs md:text-sm font-semibold space-y-1 md:space-y-1.5">
                <h1>{item.title}</h1>
                <p>{item.SKU}</p>
                <p>
                  Price: $
                  {item.discount === 0
                    ? item.price
                    : item.price * (item.discount / 100)}
                </p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  {GetColorName(item.color)} | {item.size}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-5 text-xs md:text-sm font-semibold space-y-1.5 mt-auto">
        <h1 className="text-gray-600">
          OrderId: <span className="text-black">{orderId}</span>
        </h1>
        <h1 className="text-gray-600">
          Shipping Method:{" "}
          <span className="text-black">{shippingMethod?.toUpperCase()}</span>
        </h1>
        <h1 className="text-gray-600">
          Payment Method:{" "}
          <span className="text-black">{paymentMethod?.toUpperCase()}</span>
        </h1>
        <h1 className="text-gray-600">
          Payment Status:{" "}
          <span className="text-black">{paymentStatus?.toUpperCase()}</span>
        </h1>
        <h1 className="text-gray-600">
          Order Status:{" "}
          <span className="text-black">{orderStatus?.toUpperCase()}</span>
        </h1>
      </div>
      <div className="p-5 text-xs md:text-sm font-semibold space-y-1.5 mt-auto">
        <div className="flex justify-between ">
          <span>Subtotal:</span>
          <span>${subTotal}</span>
        </div>
        <div className="flex justify-between ">
          <span>Shipping Charge:</span>
          <span>${shippingCharge}</span>
        </div>
        <div className="flex justify-between ">
          <span>Tax:</span>
          <span>${tax}</span>
        </div>
        <div className="border-b mt-3" />
        <div className="flex justify-between ">
          <span>Grand Total:</span>
          <span>${grandTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetils;
