import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllOrderFromDB } from "@/lib/api/orders/orders";
import { TOrderData } from "@/types/order.type";
import { TResponce } from "@/types/types";
import { capitalizeFirstLetter } from "@/utils";
import { format } from "date-fns/format";

const tableColoums = [
  "Order ID",
  "Customer",
  "Products",
  "Total",
  "Payment Method",
  "Payment Status",
  "Order Status",
  "Order Date",
  "Action",
];

const OrdersTable = async () => {
  const getAllOrdersFromDB = (await getAllOrderFromDB()) as TResponce;
  const orders = getAllOrdersFromDB?.data;

  return (
    <Table>
      <TableCaption>A list of your Laivaly Customer Orders.</TableCaption>
      <TableHeader>
        <TableRow>
          {tableColoums.map((coloum, indx) => (
            <TableHead key={indx} className="text-gray-500 font-semibold last:text-center">
              {coloum}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.map((data: TOrderData) => (
          <TableRow key={data._id} className="font-semibold">
            <TableCell>{data.orderId}</TableCell>
            <TableCell>
              {data.userId.userName.firstName} {data.userId.userName.lastName}
            </TableCell>
            <TableCell>
              {data.orderItems.length} Item{}
            </TableCell>
            <TableCell>${data.grandTotal}</TableCell>
            <TableCell>{data.paymentMethod.toUpperCase()}</TableCell>
            <TableCell>{capitalizeFirstLetter(data.paymentStatus)}</TableCell>
            <TableCell>{capitalizeFirstLetter(data.orderStatus)}</TableCell>
            <TableCell>{format(data.createdAt, "dd MMMM, yyyy")}</TableCell>
            <TableCell>
              <button className="btn py-2 border">Details</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
