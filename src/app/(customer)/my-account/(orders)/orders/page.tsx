import OrderCard from "@/components/customer/OrderCard";
import { getOrdersByUserId } from "@/lib/api/orders/orders";
import { TOrderData } from "@/types/order.type";
import { TResponce } from "@/types/types";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Orders",
  description:
    "Track and manage all your orders on Laivaly. View order details, status, payment history, and delivery updates in one place.",
  keywords: [
    "Laivaly orders",
    "order history",
    "track orders",
    "order status",
    "order details",
    "Laivaly shopping",
  ],
};

const OrderPage = async () => {
  const orsersData = (await getOrdersByUserId()) as TResponce;
  const orders = orsersData?.data;

  return (
    <main>
      {!orders?.length && (
        <>
          <div className="my-5 md:my-10 space-y-2 md:space-y-4 text-sm md:text-base font-medium text-gray-700">
            <p>You don’t have any orders yet</p>
            <p>Start shopping and your orders will appear here.</p>
          </div>

          <div>
            <Link href={""}>
              <button className="btn">Start Shopping</button>
            </Link>
          </div>
        </>
      )}

      {orders?.length > 0 && (
        <>
          {orders?.map((order: TOrderData) => (
            <OrderCard key={order?._id} order={order} />
          ))}
        </>
      )}
    </main>
  );
};

export default OrderPage;
