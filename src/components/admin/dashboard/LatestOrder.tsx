import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TOrderData } from "@/types/order.type";
import { capitalizeFirstLetter } from "@/utils";

const LatestOrder = ({ orders }: { orders: TOrderData[] }) => {

  return (
    <div>
      <div className="p-5 border-b bg-gray-100">
        <h1 className="text-md font-semibold">Latest Orders</h1>
      </div>
      <div className="px-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">OrderId</TableHead>
              <TableHead className="font-bold">Customer Name</TableHead>
              <TableHead className="font-bold">Shipping Method</TableHead>
              <TableHead className="text-center font-bold">
                Payment Method
              </TableHead>
              <TableHead className="text-center font-bold">
                Payment Status
              </TableHead>
              <TableHead className="text-end font-bold">Grand Total</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.orderId} className="text-sm">
                <TableCell>{order.orderId}</TableCell>
                <TableCell className="text-center">
                  {order.userId.userName.firstName}{" "}
                  {order.userId.userName.lastName}
                </TableCell>
                <TableCell className="text-center">
                  {capitalizeFirstLetter(order.shippingMethod)}
                </TableCell>
                <TableCell className="text-center">
                  {order.paymentMethod}
                </TableCell>
                <TableCell className="text-center">
                  <div
                    className={`border rounded-full w-20 mx-auto ${order.paymentStatus === "paid" ? "bg-green-100 border-green-600" : "bg-red-100 border-red-600"}`}
                  >
                    {order.paymentStatus.charAt(0).toUpperCase() +
                      order.paymentStatus.slice(1)}
                  </div>
                </TableCell>
                <TableCell className="text-end">
                  ${order.grandTotal.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LatestOrder;
