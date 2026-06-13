import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuIdCard, LuPhone, LuBox } from "react-icons/lu";
import {
  MdOutlineDateRange,
  MdOutlineEmail,
  MdMale,
  MdFemale,
} from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaDollarSign } from "react-icons/fa6";
import { GoGraph, GoVerified } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoBan, IoMaleFemale } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TCustomerProfile } from "@/types/customer.type";
import { capitalizeFirstLetter } from "@/utils";
import { format } from "date-fns";

const buttons = [
  {
    icon: <BiEdit />,
    label: "Edit Profile",
    color: "9e91f1",
  },
  {
    icon: <LuBox />,
    label: "View All Orders",
    color: "5e94ea",
  },
  {
    icon: <IoBan />,
    label: "Banned",
    color: "c64d4c",
  },
  {
    icon: <GoVerified />,
    label: "Active",
    color: "44a658",
  },
  {
    icon: <RiDeleteBin6Line />,
    label: "Delete",
    color: "dd8d8b",
  },
];

const tableColoums = ["Order ID", "Date", "Payment Method", "Status", "Total"];

const CustomerProfileDetails = ({ data }: { data: TCustomerProfile }) => {
  return (
    <Dialog>
      <DialogTrigger className="btn py-2 border">Details</DialogTrigger>
      <DialogContent className="sm:max-w-7xl">
        <DialogHeader className="border-b pb-5">
          <DialogTitle>Customer Profile</DialogTitle>
          {/* <DialogDescription>
              View complete order information, including customer details,
              products, payment, and shipping status.
            </DialogDescription> */}
        </DialogHeader>

        <div className="space-y-2">
          <div className="grid grid-cols-7 gap-2">
            <div className="border col-span-3 rounded-lg p-5 flex gap-5  w-full">
              <Avatar className="size-32 border">
                <AvatarImage src={data.userId.userProfileURL} />
                <AvatarFallback>
                  {data.userName.firstName[0]}
                  {data.userName.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="font-semibold space-y-7">
                <div className="space-y-1">
                  <div className="flex items-center gap-6">
                    <h1 className="text-lg">
                      {data.userName.firstName} {data.userName.lastName}
                    </h1>
                    <div
                      className={`border rounded-full px-4 py-0.5 text-xs flex items-center ${data.userId.status === "active" ? "border-green-600 text-green-600 bg-green-100" : data.userId.status === "pending" ? "border-yellow-600 text-yellow-600 bg-yellow-100" : "border-red-600 text-red-600 bg-red-100"} `}
                    >
                      {capitalizeFirstLetter(data.userId.status)}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 flex justify-between items-center gap-5">
                    <span className="flex items-center gap-1.5">
                      <LuIdCard className="text-lg" />
                      {data.customerId}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MdOutlineDateRange className="text-lg" />
                      {format(data.createdAt, "dd MMMM, yyyy")}
                    </span>
                  </p>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <p className="flex items-center gap-1.5">
                    <MdOutlineEmail className="text-lg" />
                    {data.userEmail}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <LuPhone className="text-lg" />
                    {data.phoneNumber || "Not Provided"}
                  </p>
                  <p className="flex items-center gap-1.5">
                    {data.gender === null ? (
                      <IoMaleFemale className="text-lg" />
                    ) : data.gender === "male" ? (
                      <MdMale className="text-lg" />
                    ) : (
                      <MdFemale className="text-lg" />
                    )}
                    {data.gender !== null
                      ? capitalizeFirstLetter(data.gender)
                      : "Not Specified"}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MdOutlineDateRange className="text-lg" />
                    {data.dateOfBirth || "Not Provided"}
                  </p>
                </div>
              </div>
            </div>
            <div className="border col-span-3 rounded-lg p-5 grid grid-cols-2 gap-5 w-full">
              <div className="font-semibold space-y-2">
                <p className="text-sm text-gray-600">Total Orders</p>
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold">12</h1>
                  <div className="rounded-lg p-2 text-2xl bg-[#eceafc] text-[#8f84f4]">
                    <LiaClipboardListSolid />
                  </div>
                </div>
              </div>
              <div className="font-semibold space-y-2">
                <p className="text-sm text-gray-600">Total Spent</p>
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold">$120.00</h1>
                  <div className="rounded-lg p-2 text-2xl bg-[#e6f4eb] text-[#459356]">
                    <FaDollarSign />
                  </div>
                </div>
              </div>
              <div className="font-semibold space-y-2">
                <p className="text-sm text-gray-600">Average Order Value</p>
                <div className="flex justify-between items-center">
                  <h1 className=" text-xl font-bold">$45.00</h1>
                  <div className="rounded-lg p-2 text-2xl bg-[#fdf2de] text-[#f3bb61]">
                    <GoGraph />
                  </div>
                </div>
              </div>
              <div className="font-semibold space-y-2">
                <p className="text-sm text-gray-600">Last Order</p>
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold">12 Apr, 2026</h1>
                  <div className="rounded-lg p-2 text-2xl bg-[#e5effc] text-[#7aa6e8]">
                    <MdOutlineDateRange />
                  </div>
                </div>
              </div>
            </div>
            <div className="border col-span-1 rounded-lg p-4 w-full space-y-2">
              {buttons.map((btn) => (
                <button
                  key={btn.label}
                  className="flex justify-center items-center gap-2 text-xs border w-full py-1.5 rounded font-semibold cursor-pointer active:scale-95 duration-300"
                >
                  <span className="text-lg" style={{ color: `#${btn.color}` }}>
                    {btn.icon}
                  </span>
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-2">
            <div className="border p-5 rounded-lg space-y-3">
              <h1 className="text-sm font-semibold">Shipping Address</h1>
              <div className="grid grid-cols-2 gap-2">
                <div className="border w-full rounded-md p-3 space-y-2">
                  <div className="text-xs font-semibold rounded-full border border-green-600 bg-green-50 text-green-600 w-fit px-5 py-0.5">
                    Default Address
                  </div>
                  <div className="font-semibold space-y-1">
                    <h1>Bayzid Ahmed</h1>
                    <p className="text-sm text-gray-600">
                      Shayesta Khan Ave Uttara Sector-4 <br />
                      Dhaka, Dhaka-1230, Bangladesh <br />
                      01302557956
                    </p>
                  </div>
                </div>
                <div className="border w-full rounded-md p-3 space-y-2">
                  <div className="font-semibold space-y-1">
                    <h1>Bayzid Ahmed</h1>
                    <p className="text-sm text-gray-600">
                      Shayesta Khan Ave Uttara Sector-4 <br />
                      Dhaka, Dhaka-1230, Bangladesh <br />
                      01302557956
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border p-5 rounded-lg space-y-3">
              <h1 className="text-sm font-semibold">Recent Orders</h1>
              <Table>
                <TableHeader>
                  <TableRow>
                    {tableColoums.map((coloum, indx) => (
                      <TableHead
                        key={indx}
                        className="font-semibold text-xs border-t bg-gray-100 first:text-start text-center last:text-end"
                      >
                        {coloum}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow className="text-xs font-semibold">
                    <TableCell>LVO-4F25-0101</TableCell>
                    <TableCell className="text-center">12 Arp, 2026</TableCell>
                    <TableCell className="text-center">Stripe</TableCell>
                    <TableCell className="text-center">Pending</TableCell>
                    <TableCell className="text-end">$20.00</TableCell>
                  </TableRow>
                  <TableRow className="text-xs font-semibold">
                    <TableCell>LVO-4F25-0101</TableCell>
                    <TableCell className="text-center">12 Arp, 2026</TableCell>
                    <TableCell className="text-center">Stripe</TableCell>
                    <TableCell className="text-center">Pending</TableCell>
                    <TableCell className="text-end">$20.00</TableCell>
                  </TableRow>
                  <TableRow className="text-xs font-semibold">
                    <TableCell>LVO-4F25-0101</TableCell>
                    <TableCell className="text-center">12 Arp, 2026</TableCell>
                    <TableCell className="text-center">Stripe</TableCell>
                    <TableCell className="text-center">Pending</TableCell>
                    <TableCell className="text-end">$20.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerProfileDetails;
