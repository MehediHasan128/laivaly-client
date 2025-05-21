import Container from "@/components/reusable/Container";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { currentUser } from "@/redux/features/auth/authSlice";
import { useGetUserOrdersFromDBQuery } from "@/redux/features/orders/orderApi";
import { useAppSelector } from "@/redux/hook";
import { TOrder } from "@/types";
import { useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";

const MyOrders = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  console.log(searchTerm);

  // Get user id
  const user = useAppSelector(currentUser);
  const userId = user?.userId;

  const { data: orderData } = useGetUserOrdersFromDBQuery(userId);
  const orders = orderData?.data;
  console.log(orders);

  return (
    <div>
      <Container>
        {/* Header */}
        <div className="flex justify-between items-center my-8 lg:my-3">
          {/* left side content */}
          <div>
            <h1 className="text-sm md:text-lg font-bold">
              All order from Laivaly
            </h1>
            <p className="text-xs md:text-base font-medium text-gray-600">
              Total 210 order
            </p>
          </div>

          {/* srearchbar */}
          <div className="w-[30%] relative">
            <Input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              name="searchproduct"
              placeholder="Search product by code"
              className="font-medium pr-14"
            />
            <div className="absolute top-0 right-0 h-full flex justify-center items-center px-5 text-xl text-gray-600">
              <FiSearch />
            </div>
          </div>
        </div>

        {/* Table container */}
        <div className="mt-5">
          <Table className="font-medium">
            <TableHeader className="bg-gray-300">
              <TableRow className="border-gray-400">
                <TableHead>Order ID</TableHead>
                <TableHead className="text-center">Shipping Address</TableHead>
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-center">Total Price</TableHead>
                <TableHead className="text-center">Payment Method</TableHead>
                <TableHead className="text-center">Payment</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-end">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders?.map((order: TOrder) => (
                <TableRow key={order._id} className="border-gray-200">
                  <TableCell className="flex items-center gap-2.5">
                    <span><BsBoxSeam className="text-4xl" /></span>
                    <p>{order._id}</p>
                  </TableCell>

                  <TableCell className="text-center">
                    <div className="text-gray-600">
                        <p>{order.shippingAddress.street}, {order.shippingAddress.city}</p>
                        <p>{order.shippingAddress.state} - {order.shippingAddress.zip}, {order.shippingAddress.country}</p>
                    </div>
                  </TableCell>

                  <TableCell className="text-center">
                    <p>{`${new Date(order.orderDate).getUTCDate()} ${new Date(
                      order.orderDate
                    ).toLocaleString("en-US", { month: "long" })}, ${new Date(
                      order.orderDate
                    ).getUTCFullYear()}`}</p>
                  </TableCell>

                  <TableCell className="text-center">
                    <p>${order.totalAmount}</p>
                  </TableCell>

                  <TableCell className="text-center">
                    <p>{order.paymentMethod}</p>
                  </TableCell>

                  <TableCell className="text-center">
                    <p>{(order.paymentStatus).charAt(0).toUpperCase() + (order.paymentStatus).slice(1)}</p>
                  </TableCell>

                  <TableCell className="text-center">
                    <p>{(order.status).charAt(0).toUpperCase() + (order.status).slice(1)}</p>
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
        </div>
      </Container>
    </div>
  );
};

export default MyOrders;
