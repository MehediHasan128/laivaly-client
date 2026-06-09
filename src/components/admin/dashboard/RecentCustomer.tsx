import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const users = [1, 2, 3, 4];

const RecentCustomer = () => {
  return (
    <Card className="rounded-md shadow h-full">
      <CardHeader>
        <CardTitle>Recent Customers</CardTitle>
        <CardAction className="border rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer">
          View All
        </CardAction>
      </CardHeader>
      <CardContent>
        <div>
          {users.map((idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b last:border-none py-3"
            >
              <div className="flex gap-3 items-center">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className=""
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-xs font-semibold">
                  <h1>Mehedi Hasan</h1>
                  <p className="text-gray-600">mehedihasan@gmail.com</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600">
                  2 hours ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentCustomer;
