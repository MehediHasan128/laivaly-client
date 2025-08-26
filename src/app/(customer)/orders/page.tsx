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
        <div className="font-medium">
          <h1 className="text-2xl md:text-4xl">Orders</h1>

          <div className="my-5 md:my-10 space-y-2 md:space-y-4 text-sm md:text-base font-medium text-gray-700">
            <p>You don’t have any orders yet</p>
            <p>Start shopping and your orders will appear here.</p>
          </div>

          <div>
            <Link href={""}>
              <button className="btn">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default OrdersPage;
