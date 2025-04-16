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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const OrdersTable = () => {
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
          <TableHead className="text-center">Payment</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Bill</TableHead>
          <TableHead className="text-end">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className="border-gray-200">
            <TableCell>
              <p>#507f191e810c19729de860ea</p>
            </TableCell>

            <TableCell className="text-center">
              <p>Mehedi Hasan</p>
            </TableCell>

            <TableCell className="text-center">
              <p>TSH-BLK-M-001</p>
            </TableCell>

            <TableCell className="text-center">
              <p>20 July, 2025</p>
            </TableCell>

            <TableCell className="text-center">
              <p>$ 25.00</p>
            </TableCell>

            <TableCell className="text-center">
              <p>Paid</p>
            </TableCell>

            <TableCell className="text-center">
              <p>Pending</p>
            </TableCell>

            <TableCell className="text-center">
              <button className="text-blue-700 cursor-pointer">Details</button>
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
