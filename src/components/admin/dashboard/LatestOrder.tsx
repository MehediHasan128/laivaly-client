import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { FaArrowRight } from "react-icons/fa6";

const tableColoums = [
  "Order ID",
  "Customer Name",
  "Shipping Method",
  "Payment Method",
  "Payment Status",
  "Grand Total",
];

const LatestOrder = ({ orders }: { orders: TOrderData[] }) => {
  return (
    <Card className="rounded-md shadow pb-0 overflow-hidden h-full">
      <CardHeader>
        <CardTitle>Latest Orders</CardTitle>
        <CardAction className="border rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer">
          View All
        </CardAction>
      </CardHeader>
      <CardContent className="h-full">
        <Table>
          <TableHeader>
            <TableRow>
              {tableColoums.map((coloum, indx) => (
                <TableHead
                  key={indx}
                  className="font-semibold last:text-center text-xs border-t bg-gray-100"
                >
                  {coloum}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.orderId} className="text-xs font-semibold">
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
                    className={`border rounded-full w-20 mx-auto py-0.5 ${order.paymentStatus === "paid" ? "bg-green-100 border-green-600 text-green-600" : "bg-red-100 border-red-600 text-red-600"}`}
                  >
                    {order.paymentStatus.charAt(0).toUpperCase() +
                      order.paymentStatus.slice(1)}
                  </div>
                </TableCell>
                <TableCell className="text-end font-bold">
                  ${order.grandTotal.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="w-full text-center py-3 text-xs font-semibold flex justify-center gap-2 bg-[#8b8ffc56] text-[#555bfc] cursor-pointer">
        <p>View All Orders</p>
        <span className="text-md">
          <FaArrowRight />
        </span>
      </CardFooter>
    </Card>
  );
};

export default LatestOrder;
