import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const RecentReviews = () => {
  const reviews = [1, 2, 3];

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
          {reviews.map((idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b last:border-none py-3"
            >
              <div className="flex gap-3 items-center">
                <Avatar className="h-14 w-10 rounded">
                  <AvatarImage
                    src="/images/featureProducts/1.png"
                    alt="@shadcn"
                    className=""
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-xs font-semibold space-y-0.5">
                  <h1 className="text-sm">Premium Cotton T-Shirt</h1>
                  <p>Very good quality! Comfortable and perfect fit</p>
                  <p className="text-gray-600">by Mehedi Hasan</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentReviews;
