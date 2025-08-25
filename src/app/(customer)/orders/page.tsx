import Link from "next/link";

export const metadata = {
  title: "My Orders",
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

const orders = false;

const OrdersPage = () => {
  return (
    <>
      {!orders && (
        <div>
          <h1 className="text-3xl font-medium">Orders</h1>

          <div className="my-10 space-y-5 font-medium text-gray-700">
            <p>You don’t have any orders yet</p>
            <p>Start shopping and your orders will appear here.</p>
          </div>

          <div>
            <Link href={""}>
              <div className="bg-black text-center text-white rounded w-full active:scale-95 duration-1000 cursor-pointer py-4">
                Start Shopping
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default OrdersPage;
