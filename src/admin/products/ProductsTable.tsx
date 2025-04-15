import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const ProductsTable = () => {
  return (
    <Table className="font-medium">
      <TableCaption>A list of all users.</TableCaption>

      <TableHeader className="bg-gray-300">
        <TableRow className="border-gray-400">
          <TableHead>Product Image</TableHead>
          <TableHead className="text-center">Category</TableHead>
          <TableHead className="text-center">Product Code</TableHead>
          <TableHead className="text-center">Price</TableHead>
          <TableHead className="text-center">Rating & Review</TableHead>
          <TableHead className="text-end">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className="border-gray-200">
            <TableCell className="w-[16.6%] flex items-center gap-2">
              <Avatar className="md:size-12 lg:size-14 rounded-lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-sm lg:text-base">
                <h1>Royal Perfume 25ml</h1>
                <p className="text-xs text-gray-600">
                  507f191e810c19729de860ea
                </p>
              </div>
            </TableCell>

            <TableCell className="w-[16.6%] text-xs lg:text-base text-center">
              <p>Perfume</p>
            </TableCell>

            <TableCell className="w-[16.6%] text-xs lg:text-base text-center">
              <p>TSH-BLK-M-001</p>
            </TableCell>

            <TableCell className="w-[16.6%] text-sm lg:text-base text-center">
              <p>$ 25.00</p>
            </TableCell>

            <TableCell className="w-[16.6%] text-sm lg:text-base text-center">
              <p>$ 25.00</p>
            </TableCell>

            <TableCell className="w-[16.6%]">
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

export default ProductsTable;
