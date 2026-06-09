import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
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
import { format } from "date-fns";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineSummarize, MdPayment } from "react-icons/md";

const tableColoums = ["Product", "SKU", "Price", "Quantity", "Total"];

const OrdersDetails = ({ data }: { data: TOrderData }) => {
  return (
    <Dialog>
      <DialogTrigger className="btn py-2 border">Details</DialogTrigger>
      <DialogContent className="sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
          <DialogDescription>
            View complete order information, including customer details,
            products, payment, and shipping status.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="border rounded-md p-4 flex justify-between items-center h-32">
            <div className="space-y-1">
              <p className="text-sm text-gray-500 font-medium">Order ID</p>
              <h1 className=" font-semibold">{data.orderId}</h1>
              <span className="border rounded-full px-5 py-1 text-xs font-semibold border-blue-500 bg-blue-100 text-blue-600">
                {capitalizeFirstLetter(data.orderStatus)}
              </span>
            </div>
            <Separator orientation="vertical" />
            <div className="space-y-1">
              <p className="text-sm text-gray-500 font-medium">Order Date</p>
              <h1 className=" font-semibold">
                {format(data.createdAt, "dd MMMM, yyyy")}
              </h1>
              <p className="text-xs font-semibold">
                {format(data.createdAt, "hh:mm a")}
              </p>
            </div>
            <Separator orientation="vertical" />
            <div className="space-y-1">
              <p className="text-sm text-gray-500 font-medium">
                Payment Status
              </p>
              <h1
                className={`${data.paymentStatus === "paid" ? "border border-green-500 bg-green-100 text-green-600" : "border border-red-500 bg-red-100 text-red-600"} border rounded-full w-fit px-5 py-1 text-xs font-semibold`}
              >
                {capitalizeFirstLetter(data.paymentStatus)}
              </h1>
              <p
                className={`${data.paymentMethod === "cod" ? "uppercase" : ""} text-xs font-semibold`}
              >
                {capitalizeFirstLetter(data.paymentMethod)}
              </p>
            </div>
            <Separator orientation="vertical" />
            <div className="space-y-1">
              <p className="text-sm text-gray-500 font-medium">
                Payment Method
              </p>
              <div className="relative h-12 w-16">
                <Image
                  src={
                    data.paymentMethod === "stripe"
                      ? "/images/icon/stripe.png"
                      : "/images/icon/COD.png"
                  }
                  alt="stripe"
                  fill
                />
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="space-y-1">
              <p className="text-sm text-gray-500 font-medium">Total Amount</p>
              <h1 className=" font-extrabold">${data.grandTotal}</h1>
              <p
                className={`${data.paymentStatus === "paid" ? "text-green-600" : "text-red-600"} text-xs font-semibold`}
              >
                {capitalizeFirstLetter(data.paymentStatus)}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="border rounded-md w-full p-5 space-y-5">
              <div className="flex gap-2 items-center">
                <span className="border border-blue-600 bg-blue-100 text-blue-600 p-0.5 rounded text-lg">
                  <AiOutlineUser />
                </span>
                <h1 className="font-semibold">Customer Information</h1>
              </div>
              <div className="flex gap-5 items-center">
                <Avatar className="size-24 border">
                  <AvatarImage src={data.userId.userProfileURL} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h1 className="font-semibold text-sm">
                    {data.userId.userName.firstName}{" "}
                    {data.userId.userName.lastName}
                  </h1>
                  <p className="font-medium text-gray-700 text-sm">
                    {data.userId.userEmail}
                  </p>
                  <p className="font-semibold text-gray-700 text-sm">
                    {data.userId.id}
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-md w-full p-5 space-y-5">
              <div className="flex gap-2 items-center">
                <span className="border border-blue-600 bg-blue-100 text-blue-600 p-0.5 rounded text-lg">
                  <IoLocationOutline />
                </span>
                <h1 className="font-semibold">Shipping Address</h1>
              </div>
              <div className="text-gray-700 text-sm font-semibold space-y-1">
                <h1>{data.shippingAddress.addressCategory},</h1>
                <h1 className="text-black text-base">
                  {data.shippingAddress.recipientsName}
                </h1>
                <p>{data.shippingAddress.address}</p>
                <p>
                  {data.shippingAddress.city}, {data.shippingAddress.state}-
                  {data.shippingAddress.postalCode},{" "}
                  {data.shippingAddress.country}
                </p>
                <p>{data.shippingAddress.phoneNumber}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3 border rounded-md p-5 space-y-5">
              <h1 className="font-semibold">
                Order Items ( {data.orderItems.length} )
              </h1>
              <Table>
                <TableHeader>
                  <TableRow>
                    {tableColoums.map((coloum, indx) => (
                      <TableHead
                        key={indx}
                        className="text-gray-600 font-semibold text-xs first:text-start text-center last:text-end"
                      >
                        {coloum}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.orderItems.map((item) => (
                    <TableRow key={item.productId}>
                      <TableCell>
                        <div className="relative w-10 h-12">
                          <Image
                            src={item.productImages}
                            alt="Product Image"
                            fill
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold text-xs text-center">
                        {item.SKU}
                      </TableCell>
                      <TableCell className="font-semibold text-xs text-center">
                        ${item.price.toFixed(2)}
                      </TableCell>
                      <TableCell className="font-semibold text-xs text-center">
                        {item.quantity}
                      </TableCell>
                      <TableCell className="font-semibold text-xs text-end">
                        ${(item.quantity * item.price).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="col-span-1 border rounded-md p-5 space-y-5">
              <div className="flex gap-2 items-center">
                <span className="border border-blue-600 bg-blue-100 text-blue-600 p-0.5 rounded text-lg">
                  <MdOutlineSummarize />
                </span>
                <h1 className="font-semibold">Order Summary</h1>
              </div>
              <div className="text-gray-700 text-sm font-semibold space-y-1">
                <h1 className="flex justify-between">
                  <span>Sub Total:</span>
                  <span>${data.subTotal}</span>
                </h1>
                <h1 className="flex justify-between">
                  <span>Shipping Charge:</span>
                  <span>${data.shippingCharge}</span>
                </h1>
                <h1 className="flex justify-between">
                  <span>Tax:</span>
                  <span>${data.tax}</span>
                </h1>
                <Separator />
                <h1 className="flex justify-between text-black font-bold">
                  <span>Grand Total:</span>
                  <span>${data.grandTotal}</span>
                </h1>
              </div>
            </div>
          </div>

          {data.paymentInfo && (
            <div className="border rounded-md p-4 space-y-4">
              <div className="flex gap-2 items-center">
                <span className="border border-blue-600 bg-blue-100 text-blue-600 p-0.5 rounded text-lg">
                  <MdPayment />
                </span>
                <h1 className="font-semibold">Payment Information</h1>
              </div>
              <div className="flex justify-between items-center h-20">
                <div className="space-y-1 text-sm">
                  <p className="text-gray-500 font-medium">Transaction ID</p>
                  <h1 className="text-xs font-semibold">
                    {data.paymentInfo?.TXID}
                  </h1>
                </div>
                <Separator orientation="vertical" />
                <div className="space-y-1 text-sm">
                  <p className="text-gray-500 font-medium">Paid At</p>
                  <h1 className="text-xs font-semibold">
                    {format(data.paymentInfo?.paidAt as Date, "dd MMMM, yyyy")}{" "}
                    {format(data.paymentInfo?.paidAt as Date, "hh:mm a")}
                  </h1>
                </div>
                <Separator orientation="vertical" />
                <div className="space-y-1 text-sm">
                  <p className="text-gray-500 font-medium">Payment Status</p>
                  <h1 className="text-xs font-semibold">
                    {capitalizeFirstLetter(data.paymentInfo.status || "")}
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrdersDetails;
