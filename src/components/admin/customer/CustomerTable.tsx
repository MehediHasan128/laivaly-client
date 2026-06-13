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
import { getAllCustomers } from "@/lib/api/customer/customerApi";
import { TCustomerProfile } from "@/types/customer.type";
import { TResponce } from "@/types/types";
import { capitalizeFirstLetter } from "@/utils";
import { format } from "date-fns/format";
import CustomerProfileDetails from "./CustomerProfileDetails";

const tableColoums = [
  "Profile",
  "Customer Id",
  "Email",
  "Status",
  "Last login",
  "Last update",
  "Details",
];

const CustomerTable = async () => {
  const getAllCustomersFromDB = (await getAllCustomers()) as TResponce;
  const customers = getAllCustomersFromDB?.data;

  return (
    <Table>
      <TableCaption>A list of your Laivaly Customers.</TableCaption>
      <TableHeader>
        <TableRow>
          {tableColoums.map((coloum, indx) => (
            <TableHead
              key={indx}
              className="text-gray-500 font-semibold first:text-start text-center last:text-end"
            >
              {coloum}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers?.map((data: TCustomerProfile) => (
          <TableRow key={data._id} className="font-semibold">
            <TableCell className="flex items-center gap-2">
              <Avatar className="size-12 border">
                <AvatarImage
                  src={data.userId.userProfileURL}
                  alt={data.customerId}
                />
                <AvatarFallback>
                  {data.userName.firstName[0]}
                  {data.userName.lastName[0]}
                </AvatarFallback>
              </Avatar>
              {data.userName.firstName} {data.userName.lastName}
            </TableCell>
            <TableCell className="text-center">{data.customerId}</TableCell>
            <TableCell className="text-center">{data.userEmail}</TableCell>
            <TableCell className="text-center">
              <div
                className={`flex justify-center items-center gap-2 border rounded-full py-0.5 ${data.userId.status === "active" ? "bg-green-50 border-green-600 text-green-600" : data.userId.status === "pending" ? "bg-yellow-50 border-yellow-600 text-yellow-600" : "bg-red-50 border-red-600 text-red-600"}`}
              >
                <div
                  className={`size-2 rounded-full ${data.userId.status === "active" ? "bg-green-600" : data.userId.status === "pending" ? "bg-yellow-600" : "bg-red-600"}`}
                />
                {capitalizeFirstLetter(data.userId.status)}
              </div>
            </TableCell>
            <TableCell className="text-center">13 October, 2025</TableCell>
            <TableCell className="text-center">
              {format(data.updatedAt, "dd MMMM, yyyy")}
            </TableCell>
            <TableCell className="text-center">
              <CustomerProfileDetails data={data} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomerTable;
