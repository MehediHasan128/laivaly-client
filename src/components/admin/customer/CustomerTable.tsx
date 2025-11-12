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

const tableColoums = [
  "profile",
  "customer id",
  "email",
  "status",
  "last login",
  "last update",
  "action",
];
const tableData = [
  {
    userProfileURL:
      "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
    userName: "Mehedi Hasan",
    id: "LVC-074655-A711E8",
    userEmail: "mehedihasan@gmail.com",
    status: "active",
    lastLogin: "10 October, 2025",
    lastUpdate: "10 August, 2025",
  },
  {
    userProfileURL:
      "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
    userName: "Mehedi Hasan",
    id: "LVC-074655-A711F8",
    userEmail: "mehedihasan@gmail.com",
    status: "inactive",
    lastLogin: "10 October, 2025",
    lastUpdate: "10 August, 2025",
  },
];

const CustomerTable = () => {
  return (
    <Table>
      <TableCaption>A list of your Laivaly Customers.</TableCaption>
      <TableHeader>
        <TableRow>
          {tableColoums.map((coloum, indx) => (
            <TableHead
              key={indx}
              className="text-gray-500 font-semibold uppercase"
            >
              {coloum}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((data) => (
          <TableRow key={data.id} className="font-semibold">
            <TableCell className="flex items-center gap-2">
              <Avatar className="size-12 border">
                <AvatarImage src={data.userProfileURL} alt={data.userName} />
                <AvatarFallback>{data.userName}</AvatarFallback>
              </Avatar>
              {data.userName}
            </TableCell>
            <TableCell>
                {data.id}
            </TableCell>
            <TableCell>{data.userEmail}</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <div className={`size-2 rounded-full ${data.status === 'active' ? 'bg-green-600' : 'bg-red-700'}`}/>
                    {data.status}
                </div>
            </TableCell>
            <TableCell>{data.lastLogin}</TableCell>
            <TableCell>{data.lastUpdate}</TableCell>
            <TableCell>action</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomerTable;
