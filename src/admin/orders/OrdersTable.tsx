import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HiDotsVertical } from "react-icons/hi";
import ProductBillPage from "./ProductBillPage";
import { useGetAllOrdersFromDBQuery } from "@/redux/features/orders/orderApi";
import { TOrder } from "@/types";

const OrdersTable = () => {
  const { data: orderData } = useGetAllOrdersFromDBQuery(undefined);
  const orders = orderData?.data;

  return (
    <Table className="font-medium">
      <TableCaption>A list of all users.</TableCaption>

      <TableHeader className="bg-gray-300">
        <TableRow className="border-gray-400">
          <TableHead>Order ID</TableHead>
          <TableHead className="text-center">Customer Name</TableHead>
          <TableHead className="text-center">Product Code</TableHead>
          <TableHead className="text-center">Date</TableHead>
          <TableHead className="text-center">Total Price</TableHead>
          <TableHead className="text-center">Payment Method</TableHead>
          <TableHead className="text-center">Payment</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Bill</TableHead>
          <TableHead className="text-end">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {orders?.map((invoice: TOrder) => (
          <TableRow key={invoice._id} className="border-gray-200">
            <TableCell>
              <p>{invoice._id}</p>
            </TableCell>

            <TableCell className="text-center">
              <p>{invoice.userId.userName.firstName} {invoice.userId.userName.lastName}</p>
            </TableCell>

            <TableCell className="text-center">
              {
                invoice.products.map((product) => (
                  <p>{product.productId.SKU}</p>
                ))
              }
            </TableCell>

            <TableCell className="text-center">
              <p>{`${(new Date(invoice.orderDate)).getUTCDate()} ${(new Date(invoice.orderDate)).toLocaleString('en-US', { month: 'long' })}, ${(new Date(invoice.orderDate)).getUTCFullYear()}`}</p>
            </TableCell>

            <TableCell className="text-center">
              <p>${invoice.totalAmount}</p>
            </TableCell>

            <TableCell className="text-center">
              <p>{invoice.paymentMethod}</p>
            </TableCell>

            <TableCell className="text-center">
              <p>{invoice.paymentStatus}</p>
            </TableCell>

            <TableCell className="text-center">
              <p>{invoice.status}</p>
            </TableCell>

            <TableCell className="text-center">
              <ProductBillPage data={invoice} btn="Details" />
            </TableCell>

            <TableCell className="">
              <div className="flex justify-end text-xl">
                <span className="p-3 rounded-lg hover:bg-gray-200 duration-300 cursor-pointer">
                  <HiDotsVertical />
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
