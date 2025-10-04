import OrderCard from "@/components/customer/OrderCard";
import { getOrdersHistoryByUserId } from "@/lib/api/orders/orders";
import { TOrderData } from "@/types/order.type";
import { TResponce } from "@/types/types";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Order History",
  description:
    "View your complete order history on Laivaly. Check past purchases, payment records, and delivery updates to easily manage and track your shopping journey.",
  keywords: [
    "Laivaly order history",
    "past orders",
    "previous purchases",
    "order records",
    "payment history",
    "delivery history",
    "Laivaly shopping",
  ],
};

const OrderHistory = async () => {
  const orsersData = (await getOrdersHistoryByUserId()) as TResponce;
  const ordersHistory = orsersData?.data;

  return (
    <main>
      {!ordersHistory?.length && (
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

      {ordersHistory?.length > 0 && (
        <>
          {ordersHistory?.map((order: TOrderData) => (
            <OrderCard key={order?._id} order={order} isHistoryCard />
          ))}
        </>
      )}
    </main>
  );
};

export default OrderHistory;
